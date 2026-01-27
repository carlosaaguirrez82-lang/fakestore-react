import { AppRouter } from "./app/providers/RouterProvider";
import { useAuthPersistence } from "./app/usecases/useAuthPersistence";

const App = () => {
      useAuthPersistence()
      return <AppRouter />  
}

export default App;
