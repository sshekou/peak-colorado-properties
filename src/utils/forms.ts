export type FormPayload = Record<string, any>;

export async function submitStub(form: string, payload: FormPayload): Promise<{ ok: boolean }>{
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 700));
  console.log(`[stub:${form}]`, payload);
  return { ok: true };
}
