import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Link Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.required().uri({allowRelative: true}).error('A valid URL is required.'),
    }),
  ],
})
