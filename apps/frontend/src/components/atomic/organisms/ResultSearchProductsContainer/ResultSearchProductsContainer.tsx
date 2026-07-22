import { ProductCard } from "../../molecules"

const maxItemsDisplay = 24

const mockProducts = [
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        salePrice: 1000000,
        productId: '1'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productType: "preorder",
        productId: '2'
    } as const,
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '3'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '4'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '5'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '6'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '7'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '8'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '9'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '10'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '11'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '12'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '13'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '14'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '15'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '16'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '17'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '18'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '19'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '20'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '21'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '22'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '23'
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productId: '24'
    },
]

export function ResultSearchProductsContainer() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {
                mockProducts.map((product) => (
                    <ProductCard
                        {...product}
                    />
                ))
            }
        </div>
    )
}