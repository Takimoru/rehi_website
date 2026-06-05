import { ProductPage } from '../pages/product/AboutPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: ProductPage,
})


