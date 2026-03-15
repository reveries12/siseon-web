import { defineField, defineType } from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: '월간지',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
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
      name: 'publishedAt',
      title: '발행일',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: '작성자',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: '요약',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: '대표 이미지',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: '내용',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})