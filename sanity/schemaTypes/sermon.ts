import { defineField, defineType } from 'sanity'

export const sermon = defineType({
  name: 'sermon',
  title: '설교',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '설교 날짜',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: '카테고리',
      type: 'reference',
      to: [{ type: 'sermonCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '설명',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'speaker',
      title: '설교자',
      type: 'string',
    }),
    defineField({
      name: 'bibleVerse',
      title: '본문',
      type: 'string',
    }),
  ],
})