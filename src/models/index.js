// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Donationinfo } = initSchema(schema);

export {
  Donationinfo
};