import {CognitoUser} from '@aws-amplify/auth';

export interface UserAttributes {
  email: string;
  name: string;
  sub: string;
}

export interface AuthUser extends CognitoUser {
  attributes: UserAttributes;
}
