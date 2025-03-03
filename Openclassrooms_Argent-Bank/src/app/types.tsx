export interface User {
  login: Login;
  firstName: string;
  lastName: string;
  userName: string;
}

export interface Login {
  email: string | undefined;
  password: string | undefined;
}

export interface Connexion {
  token: string;
}
