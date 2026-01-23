import { QueryClient, QueryClientProvider } from '@tanstack/react-query'//Esta librería se encarga de: 
                                                                        // Hacer la petición 
                                                                        // Guardar los datos en caché 
                                                                        // Dar variables automáticas como 
                                                                            // isLoading, 
                                                                            // isError o
                                                                            // data
import type { PropsWithChildren } from 'react' // Es un atajo que declara que recibirá elementos con Props

const queryClient = new QueryClient() //Se crea la variable en la que se guardarán los datos que se obtengan de la API

export function AppQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{/*Permite que cualquier elemento descendiente acceda al QueryClient*/}
      {children}
    </QueryClientProvider>
  )
}