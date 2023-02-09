import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

export const successAlert = (message: string): void => {
  Toast.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: message,
    autoClose: 2000,
  });
};
export const errorAlert = (message: string): void => {
  Toast.show({
    type: ALERT_TYPE.DANGER,
    title: 'Success',
    textBody: message,
    autoClose: 2000,
  });
};
