export interface HealthResponse {
  status: 'ok';
  time: string;
}

export function getHealth(): HealthResponse {
  return { status: 'ok', time: new Date().toISOString() };
}
