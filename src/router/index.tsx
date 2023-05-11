import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes, {
  basename: process.env.NODE_ENV === 'production' ? '/Pet-blog-react' : undefined
})

export default router
