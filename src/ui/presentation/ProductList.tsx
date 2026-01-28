import { Grid } from '@mui/material'
import type { Product } from '../../domain/models/Product'
import { ProductCard } from '../components/ProductCards/ProductCard'

interface Props {
  products: Product[]
}

export function ProductList({ products }: Props) {
  return (
    <>
     <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid size={{ xs:12, sm:6, md:4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
