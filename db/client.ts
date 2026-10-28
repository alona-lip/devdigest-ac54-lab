export interface Row {
  [column: string]: unknown;
}

/** Minimal stand-in for a real database driver. */
export const db = {
  async query(sql: string, params: unknown[] = []): Promise<Row[]> {
    console.log('[db]', sql, params);
    return [];
  },
};
