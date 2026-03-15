import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { news } from './news'
import { sermon } from './sermon'
import { sermonCategory } from './sermonCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, news, sermon, sermonCategory],
}