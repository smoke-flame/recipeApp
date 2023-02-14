import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {LazyUser} from 'models';
import {AvatarSize} from 'components/UserAvatar/types';
import {avatarConfig, fontSizeConfig} from 'components/UserAvatar/constants';
import {styles} from './UserAvatar.style';

interface IProps {
  user: LazyUser | null;
  size: AvatarSize;
}

const UserAvatar: FC<IProps> = ({user, size}) => {
  if (!user) return null;

  if (user.image) {
    return (
      <View style={avatarConfig[size]}>
        <Image style={styles.image} source={{uri: user.image}} />
      </View>
    );
  }

  return (
    <View style={[styles.userBlock, avatarConfig[size]]}>
      <Text style={[styles.userInitial, fontSizeConfig[size]]}>
        {user.name[0].toUpperCase()}
      </Text>
    </View>
  );
};

export default UserAvatar;
