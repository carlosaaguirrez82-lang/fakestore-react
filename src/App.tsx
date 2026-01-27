import { AppRouter } from './app/providers/RouterProvider'
import { useCartPersistence } from './app/useCases/useCartPersistence'

const App = () => {//En App se va a mostrar árbol de rutas
  useCartPersistence()
  return <AppRouter />
}

export default App;
