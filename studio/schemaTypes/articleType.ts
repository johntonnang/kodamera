import {defineField, defineType} from 'sanity'
import {DocumentSheetIcon} from '@sanity/icons'

const customSlugify = (input: string) => {
  const charMap = {
    ä: 'a',
    ö: 'o',
    å: 'a',
    ü: 'u',
    é: 'e',
    è: 'e',
    à: 'a',
  }

  let slug = input.toLowerCase()

  for (const [key, value] of Object.entries(charMap)) {
    slug = slug.replace(new RegExp(key, 'g'), value)
  }

  slug = slug.replace(/\s+/g, '-')
  slug = slug.replace(/[^\w-]/g, '')

  return slug
}

export const articleType = defineType({
  name: 'article',
  title: 'Article',
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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: customSlugify,
      },
      validation: (rule) => rule.required().error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.name,
      group: 'details',
    }),
    defineField({
      name: 'preamble',
      type: 'text',
      title: 'Preamble',
      rows: 2,
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: 'details',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'details',
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'editorial',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
      group: 'editorial',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      author: 'author.name',
      date: 'date',
      image: 'image',
    },
    prepare({name, author, image}) {
      const nameFormatted = name || 'Untitled article'

      return {
        title: author ? `${nameFormatted} (${author})` : nameFormatted,
        media: image || DocumentSheetIcon,
      }
    },
  },
})
