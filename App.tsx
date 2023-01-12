import React from 'react';
import Navigator from './src/router/Navigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {StatusBar, View} from 'react-native';
import {colors} from './src/constants/styles';
import config from './src/aws-exports';
import {Amplify} from 'aws-amplify';
import {AlertNotificationRoot} from 'react-native-alert-notification';

Amplify.configure(config);

const App = () => {
  return (
    <AlertNotificationRoot>
      <Provider store={store}>
        <View style={{backgroundColor: colors.white, flex: 1}}>
          <Navigator />
          <StatusBar hidden />
        </View>
      </Provider>
    </AlertNotificationRoot>
  );
};
export default App;
