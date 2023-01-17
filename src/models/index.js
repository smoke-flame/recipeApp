// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Recipe, IngredientJSON, InstructionJSON } = initSchema(schema);

export {
  User,
  Recipe,
  IngredientJSON,
  InstructionJSON
};