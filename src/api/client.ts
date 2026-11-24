import { BASE_URL } from "@/constants/base-url";
import { ApiError } from "@/models/api-error.model";
import { ApiOptions } from "@/models/api-options.model";

export async function api<T>(
  path: string,
  {
    method = "GET",
    body,
    headers }: ApiOptions = {}
): Promise<T> {
  
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const raw = await res.text();
    let data = null;
    data = JSON.parse(raw);

    throw new ApiError(res.status, data);
  }

  return (await res.json()) as T;
}