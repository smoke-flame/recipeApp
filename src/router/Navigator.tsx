import React, {FC} from 'react';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {GuestNavigation} from 'router/GuestNavigation';
import {AuthorizedNavigation} from 'router/AuthorizedNavigation';

const Navigator: FC = () => {
  const user = useTypedSelector(state => state.userReducer.user);

  return user ? <AuthorizedNavigation /> : <GuestNavigation />;
};

export default Navigator;
