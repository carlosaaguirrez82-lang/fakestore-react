import { httpClient } from './httpClient'//herramienta de Axios, es como un navegador que hace llamadas a urls
import type { AuthRepository } from '../../domain/repositories/AuthRepository'//es la capa de dominio, 
                                                                              //con él se obliga a que tenga la 
                                                                              //función login con los parámetros
                                                                              //especificados.

//Es la capa de infraestructura, su trabajo es comunucarse con agentes externos como apis
//Así se define el objeto que se encargará de comunicarse con una API real, 
//con ": AuthRepository" es como definir el tipo que tomará este objeto, podría ser String, Int o en este caso AuthRepository
export const authApi: AuthRepository = {
    async login(username, password) {
        
            //
        //Con { data } se toma SOLAMENTE tal propiedad del resultado de la llamada
        const { data } = await httpClient.post('/auth/login', {
                           //Usando httpClient, se hace una petición de tipo POST a la dirección escrita
                                                            //con ,{  } se declara que se enviará un objeto 
                                                            // con el username y el password
                        //el await espera a que el servidor (la API) responda
            username,
            password,
        })

        //Devuelve solamente la data (token) a quién lo pidió
        return data
    },
}