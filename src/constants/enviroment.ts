export const ENV = {
  appEnv: process.env.EXPO_PUBLIC_AMBIENTE ?? "dev",
  apiUrl: process.env.EXPO_PUBLIC_API_URL ?? "",
  mock: process.env.EXPO_PUBLIC_MOCK === "true",
}