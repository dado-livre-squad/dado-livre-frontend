import { BASE_URL } from "@/constants/base-url";

export async function api<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> | undefined),
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(`${res.status}`, body);
  }

  return (await res.json()) as T;
}