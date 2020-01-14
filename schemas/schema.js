// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import article from './documents/article'
import podcast from './documents/podcast'
import creator from './documents/creator'
import role from './documents/role'

// Object types
import addCreator from './objects/addCreator'
import richText from './objects/richText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'osqledaren',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    article,
    podcast,
    creator,
    category,
    role,
    addCreator,
    richText,
  ])
})
