import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import path from 'path';
import fs from 'fs';

// In Docker production, use /app/db/sqlite.db (named volume).
// In local dev, use sqlite.db in the project root.
const dbDir = process.env.DB_DIR || '.';
const dbPath = path.join(dbDir, 'sqlite.db');

// Ensure the directory exists
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
