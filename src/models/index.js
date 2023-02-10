// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Recipe } = initSchema(schema);

export {
  User,
  Recipe
};