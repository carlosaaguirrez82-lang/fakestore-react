import { 
  Box,
  Button, 
  Card, 
  CardActions,
  CardContent,
  CardMedia, 
  Typography 
} from '@mui/material' //todo componente
import { useProducts } from '../../app/usecases/useProducts'

const HomePage = () => {

  const { data, isLoading, error } = useProducts()
  
  //todo crear un comopnente para loader
  if (isLoading) return <p>Cargando...</p> 
  //todo crear un componente para error 
  if (error) return <p>Error al cargar productos</p>
  //todo crear un componente para producto tipo card
  /**
   * * <Card product={product}/>**/

  return (
    <div>
      <Box >
        <div>Buscador *</div>
        <div>Filtro por precio *</div>
        <div>Filtro por rating *</div>
      </Box>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {data?.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography>{product.title}</Typography>
              <Typography>${product.price}</Typography>
            </CardContent>
            {/*<Button onclick={{handleProductDetail}}>Ver más</Button>*/}
          </Card>
        ))}
      </Box>
    </div>
  )
}

export default HomePage