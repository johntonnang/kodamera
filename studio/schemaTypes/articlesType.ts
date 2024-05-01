import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const articlesType = defineType({
  name: 'articles',
  title: 'Articles page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: description?.slice(0, 100) + (description.length > 100 ? '...' : ''),
      }
    },
  },
})
