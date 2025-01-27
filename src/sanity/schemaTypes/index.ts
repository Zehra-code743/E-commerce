import { type SchemaTypeDefinition } from 'sanity'; // Importing SchemaTypeDefinition type
import { Product } from './Product';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product], // Use the imported Product schema in the types array
};