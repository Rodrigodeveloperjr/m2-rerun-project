interface IProductRequest {
    image: string
    name: string
    description: string
    category: string
    price: number
}

interface IProductUpdateRequest {
    image?: string
    name?: string
    description?: string
    category?: string
    price?: number
}

export { IProductRequest, IProductUpdateRequest }
