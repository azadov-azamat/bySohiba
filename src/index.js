//REACT
import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

//STORE
import {store} from "./redux/store"
// import "./utils/bootstrap"

// CSS
import './index.css'
import 'aos/dist/aos'
import 'aos/dist/aos.css'
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'react-image-lightbox/style.css'

//COMPONENT
import App from './App'
import Spinner from './components/Animation'
import {ToastContainer} from 'react-toastify'

const app = (
    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </Provider>
)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(app)