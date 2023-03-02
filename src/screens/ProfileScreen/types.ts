export interface IChangeUserValues {
  image: string | null | undefined;
  name: string;
  gender: gender | null;
  id: string;
  birthdayDate: string | null;
}

export type gender = 'male' | 'female';
