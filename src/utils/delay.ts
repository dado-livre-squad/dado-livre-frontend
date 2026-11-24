export async function delay(ms: number) {
  if (ms < 0) return

  await new Promise(resolve => setTimeout(resolve, ms))
}