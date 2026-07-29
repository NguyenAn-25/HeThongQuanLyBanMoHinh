import App from '@/App'
import { CustomerLayout } from '@/components/atomic/templates'
import { BreadcrumbLayout } from '@/components/atomic/templates/BreadcrumbLayout/BreadcrumbLayout'
import { CartPage, CustomerOrdersPage, DesignSystemPage, HomePage, CustomerOrderDetailPage, OrderPage, ProductDetailPage, SearchPage } from '@/pages'
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
                            },
                            {
                                path: "/category/:name",
                                element: <SearchPage />
                            },
                            {
                                path: "/cart",
                                element: <CartPage />
                            },
                            {
                                path: "/order",
                                element: <OrderPage />
                            },
                            {
                                path: "/orders",
                                element: <CustomerOrdersPage />
                            },
                            {
                                path: "/orders/:id",
                                element: <CustomerOrderDetailPage />
                            },
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