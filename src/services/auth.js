const BASE_URL = "http://localhost:5000/api/auth";

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json(); // { access, refresh, user }
}
