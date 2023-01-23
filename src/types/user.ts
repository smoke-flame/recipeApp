import {CognitoUser} from '@aws-amplify/auth';

export interface AuthUser extends CognitoUser {
  attributes: {
    email: string;
    name: string;
    sub: string;
  };
}
