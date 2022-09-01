import React, {useEffect, useState} from "react"
import Layout from "./layout";
import {Navigate, Route, Routes} from "react-router-dom";
import routes from "./router";
import {defaultRoute} from "./utils/constants";
import Refresh from "./components/Animation";

function App() {

    return (
        <Layout>
            <Routes>
                {
                    routes?.map(route =>
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<route.component/>}
                        />
                    )
                }
                <Route
                    exact
                    path='/'
                    element={<Navigate to={defaultRoute} replace/>}
                />
            </Routes>
        </Layout>
    )
}

export default App
