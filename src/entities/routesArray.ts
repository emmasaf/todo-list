import EmptyPage  from '../pages/EmptyPage';
import  HomePage  from '../pages/HomePage';


import { IRoutes } from './todoModel'

const routesArray: Array<IRoutes> = [
  {
    id: 1, name: 'Home Page / TodoList', component: HomePage, path: '/'
  },
  { id: 2, name: 'Empty Page', component: EmptyPage, path: '/empty' },

]
export default routesArray