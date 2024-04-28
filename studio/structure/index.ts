import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming articles')
        .schemaType('article')
        .icon(CalendarIcon)
        .child(S.documentList().title('Upcoming articles').filter('date > now()')),
      S.listItem()
        .title('Past articles')
        .schemaType('article')
        .icon(CalendarIcon)
        .child(S.documentList().title('Past articles').filter('date < now()')),
      S.divider(),
      S.documentTypeListItem('authors').title('Authors').icon(UsersIcon),
    ])
