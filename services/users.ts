import { db } from '../db/client';

export interface User {
  id: string;
  email: string;
}

export async function listUsers(limit = 50): Promise<User[]> {
  const rows = await db.query('select id, email from users order by id limit $1', [limit]);
  return rows.map((r) => ({ id: String(r.id), email: String(r.email) }));
}
