import { useRoutes } from 'react-router-dom'
import { webRouter } from '../routers'

function App() {
  return useRoutes(webRouter as Array<any>)
}

export default App
