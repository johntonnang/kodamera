import {defineField, defineType} from 'sanity'
import {ImageIcon, TextIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: ImageIcon,
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
    defineField({
      name: 'contactButton',
      type: 'object',
      title: 'Contact Button',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button Label',
        },
        {
          name: 'url',
          type: 'url',
          title: 'Button URL',
          validation: (Rule) =>
            Rule.required().uri({allowRelative: true}).error('A valid URL is required.'),
        },
      ],
    }),
    defineField({
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
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
    defineField({
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'headerImage',
    },
    prepare({title, description, image}) {
      return {
        title,
        subtitle: description?.slice(0, 100) + (description.length > 100 ? '...' : ''),
        media: image || TextIcon,
      }
    },
  },
})
