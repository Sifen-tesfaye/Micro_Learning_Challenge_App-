const RESET_PASSWORD_ENDPOINT = "https://learning-challenge.onrender.com/api/auth/password/forgot/";
const RESET_CONFIRM_ENDPOINT = "https://learning-challenge.onrender.com/api/auth/password/reset/confirm/";

export async function requestPasswordReset(email) {
  const response = await fetch(RESET_PASSWORD_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.detail || data.message || "Failed to send reset link.");
  }
  return data;
}

export async function confirmPasswordReset(uid, token, newPassword) {
  const response = await fetch(RESET_CONFIRM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, token, new_password: newPassword }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.detail || data.message || "Failed to reset password.");
  }
  return data;
}
