// Interface para login
// No se crea un archivo nuevo para esto porque es parte del modelo de Autenticación.
export interface LoginCredentials {
  username: string; 
  password: string;
}

// Lo que la API nos devuelve
export interface AuthResponse {
  token: string;
  // Creamos el campo desde la interfaz en lugar de en el servicio para mantener la separación de responsabilidades.
  isAuthenticated: boolean;
}