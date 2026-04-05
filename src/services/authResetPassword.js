const RESET_PASSWORD_ENDPOINT = "/api/auth/reset-password/";

export async function requestPasswordReset(email) {
  const response = await fetch(RESET_PASSWORD_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.detail || data.message || "Failed to send reset link.",
    );
  }

  return data;
}
