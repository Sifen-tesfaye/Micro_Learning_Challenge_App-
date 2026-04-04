// service/authResetPassword.js
export async function requestPasswordReset(email) {
  // Temporary default endpoint until backend provides real one
  const response = await fetch("/api/auth/reset-password/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to send reset link");
  }

  return response.json();
}
