import App from '@/App'
import { CustomerLayout } from '@/components/atomic/templates'
import { BreadcrumbLayout } from '@/components/atomic/templates/BreadcrumbLayout/BreadcrumbLayout'
import { DesignSystemPage, HomePage, ProductDetailPage, SearchPage } from '@/pages'
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
                    {
                        element: <BreadcrumbLayout />,
                        children: [
                            {
                                path: "/products/:id",
                                element: <ProductDetailPage />
                            },
                            {
                                path: "/search",
                                element: <SearchPage />
                            }
                        ]
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