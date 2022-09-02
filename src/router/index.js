import Home from "../views/Home/index.jsx"
import Weddings from "../views/Weddings"
import Abayas from "../views/Abayas"
import Beauty from "../views/Beauty"
import Accessories from "../views/Accessories"

import {defaultRoute} from "../utils/constants.js"

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
        id: 3,
        name: 'Abayas',
        path: "/abayas",
        component: Abayas
    },
    {
        id: 4,
        name: 'Beauty',
        path: "/beauty",
        component: Beauty
    },
    {
        id: 5,
        name: 'Accessories',
        path: "/accessories",
        component: Accessories
    }
]

export default routes