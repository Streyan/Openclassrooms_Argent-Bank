import { Login } from "../app/types";

export async function getLoginData(login: Login) {
  const url = "http://localhost:3001/api/v1/user/login";

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
}

export async function getUserData(token: string) {
  const url = "http://localhost:3001/api/v1/user/profile";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token
    }
  });
  if (!response.ok) {
    console.log("response", response);
    throw new Error(`Response status: ${response.status}`);
  } else {
    const user = await response.json();
    console.log("response", user);
    return user.body;
  }
}
