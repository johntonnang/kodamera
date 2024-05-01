import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: EnvelopeIcon,
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
      name: 'email',
      type: 'email',
      title: 'Email',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
    }),
    defineField({
      name: 'website',
      type: 'url',
      title: 'Website',
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              title: 'Social Media Platform',
              description: 'E.g., Twitter, Facebook, Instagram',
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'Social Media URL',
              validation: (Rule) =>
                Rule.required().uri({allowRelative: false}).error('A valid URL is required'),
            }),
          ],
        },
      ],
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
