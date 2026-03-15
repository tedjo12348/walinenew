
-- Waline basic tables (simplified)
CREATE TABLE IF NOT EXISTS wl_comment (
  id SERIAL PRIMARY KEY,
  nick TEXT,
  mail TEXT,
  link TEXT,
  comment TEXT,
  url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reaction table
CREATE TABLE IF NOT EXISTS wl_reaction (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  type TEXT NOT NULL,
  count INTEGER DEFAULT 0,
  UNIQUE(url, type)
);
