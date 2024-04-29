import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Menu Title',
      description: 'Title of the menu, e.g., "Main Menu"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'An optional logo for the menu',
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
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.min(1).error('A menu must have at least one link.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})
