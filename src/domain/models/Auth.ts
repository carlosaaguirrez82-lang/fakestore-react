// Interface para login
// No se crea un archivo nuevo para esto porque es parte del modelo de Autenticación.
// A este paso se le llama  implementar el contratro. 
// El archivo  obedece lo que el dominio indica.

export interface LoginCredentials {
  username: string; 
  password: string;
}

export interface AuthResponse {
  token: string;
  // Creamos el campo desde la interfaz en lugar de en el servicio para mantener la separación de responsabilidades.
  isAuthenticated: boolean;
}