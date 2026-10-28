import { db } from '../db/client';

export interface UsersResponse {
  users: { id: string; email: string }[];
}

export async function getUsers(limit = 50): Promise<UsersResponse> {
  const rows = await db.query('select id, email from users order by id limit $1', [limit]);
  return { users: rows.map((r) => ({ id: String(r.id), email: String(r.email) })) };
}
