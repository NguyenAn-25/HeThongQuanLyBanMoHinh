import App from '@/App'
import { CustomerLayout } from '@/components/atomic/templates'
import { DesignSystemPage, HomePage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <CustomerLayout />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />
                    },
                ]
            },
            {
                path: '/design',
                element: <DesignSystemPage></DesignSystemPage>
            }
        ]
    }
])