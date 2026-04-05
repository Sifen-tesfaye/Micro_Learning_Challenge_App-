const API_URL = "/api/auth";

async function request(path, payload, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    method: options.method ?? "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
    body: payload ? JSON.stringify(payload) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.detail ||
        data.message ||
        data.error ||
        "Authentication request failed.",
    );
  }

  return data;
}

export function login(email, password) {
  return request("/login/", { email, password });
}

export function signup(fullName, email, password) {
  return request("/register/", {
    username: fullName,
    email,
    password,
  });
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh");
}

export function getProfile(token) {
  return request("/profile/", null, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
