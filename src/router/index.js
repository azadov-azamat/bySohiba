import {defaultRoute} from "../utils/constants.js"
import Home from "../views/Home/index.jsx"
import Weddings from "../views/Weddings"

const routes = [
    {
        id: 1,
        name: 'Home',
        path: defaultRoute,
        component: Home
    },
    {
        id: 2,
        name: 'Weddings',
        path: "/weddings",
        component: Weddings
    }
]

export default routes