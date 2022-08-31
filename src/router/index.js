import {defaultRoute} from "../utils/constants.js"
import Home from "../views/Home/index.jsx"
import Weddings from "../views/Weddings"
import Abayas from "../views/Abayas";

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
    },
    {
        id: 2,
        name: 'Abayas',
        path: "/abayas",
        component: Abayas
    }
]

export default routes