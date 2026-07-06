import App from '@/App'
import { DesignSystemPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/design',
                element: <DesignSystemPage></DesignSystemPage>
            }
        ]

    }
])