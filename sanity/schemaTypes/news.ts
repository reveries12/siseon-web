import { defineField, defineType } from 'sanity'

export const news = defineType({
  name: 'news',
  title: '공지사항',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: '작성자',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '등록일',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPinned',
      title: '상단 고정',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'viewCount',
      title: '조회수',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'body',
      title: '내용',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})