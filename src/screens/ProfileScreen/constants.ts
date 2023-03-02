import {gender, IChangeUserValues} from 'screens/ProfileScreen/types';

export const initialValues: IChangeUserValues = {
  image: null,
  birthdayDate: null,
  id: '',
  name: '',
  gender: null,
};

export const genders: gender[] = ['male', 'female'];
