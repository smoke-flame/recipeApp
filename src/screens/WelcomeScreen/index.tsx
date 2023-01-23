import React, {useCallback} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {styles} from './WelcomeScreen.style';
import bgImage from 'assets/img/welcomeBg.png';
import {colors} from 'constants/styles';
import UIButton from 'components/UIButton';
import {useTypedNavigation} from 'hooks/useTypedNavigation';

const bgUri = Image.resolveAssetSource(bgImage).uri;

const WelcomeScreen = () => {
  const navigate = useTypedNavigation();
  const handlePress = useCallback(
    () => navigate.navigate('SignIn'),
    [navigate],
  );

  return (
    <View style={styles.root}>
      <ImageBackground
        source={{uri: bgUri}}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.header}>
            <MaterialCommunityIcon
              name="chef-hat"
              size={125}
              color={colors.white}
            />
            <Text style={styles.welcomeText}>100K+ Premium Recipe</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>Get Cooking</Text>
            <Text style={styles.subTitle}>Simple way to find Tasty Recipe</Text>
            <View style={styles.button}>
              <UIButton
                onPress={handlePress}
                title="Start cooking"
                icon={
                  <AntDesignIcon
                    name="arrowright"
                    size={21}
                    color={colors.white}
                  />
                }
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
