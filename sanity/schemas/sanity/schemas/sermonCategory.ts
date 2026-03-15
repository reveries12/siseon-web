import { defineField, defineType } from 'sanity'

export const sermonCategory = defineType({
  name: 'sermonCategory',
  title: '설교 카테고리',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '카테고리 이름',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: '순서',
      type: 'number',
      initialValue: 0,
    }),
  ],
})