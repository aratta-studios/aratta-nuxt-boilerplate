export function saveToken(token) {
  if (process.browser) {
    return localStorage.setItem("token", "Bearer " + token);
  }
}

export function removeToken() {
  if (process.browser) {
    return localStorage.removeItem("token");
  }
}

export function getToken() {
  if (process.browser) {
    return localStorage.getItem("token")
  }
}
