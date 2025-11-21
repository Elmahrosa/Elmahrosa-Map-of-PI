-- Elmahrosa Map of Pi - Authentication & Fee Management Schema
-- Run this script to set up the database for production

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('founder', 'seller', 'buyer')),
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Current Fees table
CREATE TABLE IF NOT EXISTS current_fees (
  fee_type TEXT PRIMARY KEY,
  amount NUMERIC NOT NULL CHECK (amount >= 0),
  type TEXT NOT NULL CHECK (type IN ('fixed', 'percentage')),
  description TEXT,
  treasury_route TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on current_fees
ALTER TABLE current_fees ENABLE ROW LEVEL SECURITY;

-- Fee policies
CREATE POLICY "Fees are viewable by everyone"
  ON current_fees FOR SELECT
  USING (true);

CREATE POLICY "Only founders can update fees"
  ON current_fees FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'founder'
    )
  );

-- Fee History table (audit trail)
CREATE TABLE IF NOT EXISTS fee_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fee_type TEXT NOT NULL,
  fee_name TEXT,
  old_amount NUMERIC,
  new_amount NUMERIC NOT NULL,
  updated_by UUID REFERENCES profiles(id),
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on fee_history
ALTER TABLE fee_history ENABLE ROW LEVEL SECURITY;

-- Fee history policies
CREATE POLICY "Fee history viewable by founders"
  ON fee_history FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'founder'
    )
  );

CREATE POLICY "Only founders can insert fee history"
  ON fee_history FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'founder'
    )
  );

-- Initialize default fees
INSERT INTO current_fees (fee_type, amount, type, description, treasury_route) VALUES
  ('NFT_MINTING', 1.5, 'fixed', 'Covers verification, badge issuance, and treasury contribution', 'civic_treasury'),
  ('TRADE_COMMISSION', 3.5, 'percentage', 'Platform commission on successful trades', 'civic_treasury'),
  ('SELLER_VERIFICATION', 2.0, 'fixed', 'One-time verification covering KYC, badge creation, and map listing', 'verification_pool'),
  ('PREMIUM_LISTING', 5.0, 'fixed', 'Featured placement on map, priority search ranking', 'civic_treasury'),
  ('WITHDRAWAL_FEE', 1.0, 'percentage', 'Network fee for Pi wallet withdrawals', 'network_fees')
ON CONFLICT (fee_type) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_current_fees_updated_at
  BEFORE UPDATE ON current_fees
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_fee_history_timestamp ON fee_history(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_fee_history_updated_by ON fee_history(updated_by);

-- Comments for documentation
COMMENT ON TABLE profiles IS 'User profiles with role-based access control';
COMMENT ON TABLE current_fees IS 'Active marketplace fees with audit trail';
COMMENT ON TABLE fee_history IS 'Complete history of all fee changes for compliance';
