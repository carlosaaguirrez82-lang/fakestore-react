import { AppRouter } from "./app/providers/RouterProvider";
import { useCartPersistence } from './app/usecases/useCartPersistence'

const App = () => {
      useCartPersistence()
      return <AppRouter />  
}

export default App;
