import { ErrorBody } from "./error-body.model";

export class ApiError extends Error {
  constructor(
    public status: number,
    public data: ErrorBody | null = null
  ) {
    super(
      data?.msg ??
      data?.detail ??
      data?.message ??
      data?.title ??
      data?.error ??
      `Erro ${status}`
    );
    this.name = "ApiError";
  }
}