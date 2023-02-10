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
    title: 'Error',
    textBody: message,
    autoClose: 2000,
  });
};
export const infoAlert = (message: string): void => {
  Toast.show({
    type: ALERT_TYPE.WARNING,
    title: 'Info',
    textBody: message,
    autoClose: 2000,
  });
};
