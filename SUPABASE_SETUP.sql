-- Create contacts table
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert
CREATE POLICY "Allow anonymous insert" ON contacts
FOR INSERT WITH CHECK (true);

-- Create policy to allow reading own data (optional)
CREATE POLICY "Allow read all" ON contacts
FOR SELECT USING (true);

-- Grant permissions to anon role
GRANT INSERT ON contacts TO anon;
GRANT SELECT ON contacts TO anon;
