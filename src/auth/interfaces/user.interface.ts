export enum Role {
  ROLE_1 = 'Usuario Regular',
  ROLE_2 = 'Administrador',
}

type User = {
  id: string;
  userName: string;
  password: string;
  role: Role;
};

export interface IAuthenticate {
  readonly user: User;
  readonly token: string;
}
