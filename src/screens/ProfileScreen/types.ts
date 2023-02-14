export interface IChangeUserValues {
  image: string | null | undefined;
  name: string;
  sex: sex | null;
  id: string;
  birthdayDate: Date | null;
}

type sex = 'male' | 'female';
