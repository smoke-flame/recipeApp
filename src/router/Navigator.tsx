import React, {FC} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {GuestNavigation} from './GuestNavigation';
import {AuthorizedNavigation} from './AuthorizedNavigation';

const Navigator: FC = () => {
  const user = useTypedSelector(state => state.userReducer.user);

  return user ? <AuthorizedNavigation /> : <GuestNavigation />;
};

export default Navigator;
