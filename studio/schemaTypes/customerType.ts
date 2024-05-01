import {defineField, defineType} from 'sanity'
import {DocumentSheetIcon} from '@sanity/icons'

export const customerType = defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  icon: DocumentSheetIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'preamble',
      type: 'text',
      title: 'Preamble',
      rows: 2,
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'editorial',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
    },
    prepare({name, image}) {
      const nameFormatted = name || 'Untitled customer case'

      return {
        title: nameFormatted,
        media: image || DocumentSheetIcon,
      }
    },
  },
})
