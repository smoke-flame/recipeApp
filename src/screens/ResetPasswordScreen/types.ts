export interface IFormValues {
  email: string;
  password: string;
  code: string;
}

export type resetStep = 'email' | 'code' | 'password';
