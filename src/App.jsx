import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'

const App = () => {
    const crudpath = createHashRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <h2>Page not found ❌</h2>,
            children: [
                { index: true, element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/projects", element: <Projects /> },
                { path: "/contact", element: <Contact /> }
            ]
        }
    ]);

    return <RouterProvider router={crudpath} />;
}

export default App;
