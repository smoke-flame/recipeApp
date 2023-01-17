import {useTypedDispatch} from './useTypedDispatch';
import {useCallback, useEffect} from 'react';
import {Auth} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import {setUser} from '../store/user/userSlice';
import {User} from '../models';
import {AuthUser} from '../types/user';

export const useAppInit = () => {
  const dispatch = useTypedDispatch();
  const checkUser = useCallback(async () => {
    try {
      const authenticatedUser: AuthUser = await Auth.currentAuthenticatedUser();
      const {name, email: userEmail, sub} = authenticatedUser.attributes;

      if (authenticatedUser) {
        const [user] = await DataStore.query(User, usr =>
          usr.userId.eq(authenticatedUser.attributes.sub),
        );
        if (user) {
          dispatch(setUser(user));
          return;
        }
        const newUser = await DataStore.save(
          new User({
            userId: sub,
            name,
            email: userEmail,
            likedRecipes: [],
            image: null,
          }),
        );
        dispatch(setUser(newUser));
      }
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);
};
