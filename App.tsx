import React from 'react';
import {StatusBar, View} from 'react-native';
import {colors} from 'constants/styles';
import {Amplify} from 'aws-amplify';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {useAppInit} from 'hooks/useAppInit';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import Navigator from 'router/Navigator';
import config from './src/aws-exports';

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
