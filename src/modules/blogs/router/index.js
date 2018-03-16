import BlogEdit from '../BlogEdit'
import Blogs from '../Blogs'

export default [
  {
    path: 'blogs',
    name: 'Blogs',
    component: Blogs
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
