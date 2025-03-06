import { Login } from "../app/types";

export async function getLoginData(login: Login) {
  const url = "http://localhost:3001/api/v1/user/login";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        accept: " application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: login.email, password: login.password })
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    } else {
      const token = await response.json();
      return token.body.token;
    }
  } catch (error) {
    console.error(error.message);
  }
}
