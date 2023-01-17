import React from 'react';
import Navigator from './src/router/Navigator';
import {StatusBar, View} from 'react-native';
import {colors} from './src/constants/styles';
import config from './src/aws-exports';
import {Amplify} from 'aws-amplify';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {useAppInit} from './src/hooks/useAppInit';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

Amplify.configure(config);

const App = () => {
  useAppInit();

  return (
    <AlertNotificationRoot>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <Navigator />
        <StatusBar hidden />
      </View>
    </AlertNotificationRoot>
  );
};
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
