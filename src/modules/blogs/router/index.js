import BlogEdit from '../BlogEdit'
import Blogs from '../Blogs'

export default [
  {
    path: '/',
    name: 'Blogs',
    component: Blogs,
    alias: '/blogs'
  },
  {
    path: 'blog',
    name: 'CreateBlog',
    component: BlogEdit,
    children: [
      {
        path: '/:id',
        name: 'EditBlog'
      }
    ]
  }
]
