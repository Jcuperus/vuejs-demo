import BlogEdit from '../BlogEdit'
import Blogs from '../Blogs'

export default [
  {
    path: '/',
    name: 'Blogs',
    component: Blogs,
    alias: '/blogs',
    label: 'Home'
  },
  {
    path: '/blog',
    name: 'CreateBlog',
    component: BlogEdit,
    children: [
      {
        path: '/:blogId([0-9]+)',
        name: 'EditBlog',
        props: true
      }
    ]
  }
]
