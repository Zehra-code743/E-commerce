import { type SchemaTypeDefinition } from 'sanity'
import Product from './Product'; // Assuming './Product' exports a valid schema



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product], // Use the imported Product schema
}
