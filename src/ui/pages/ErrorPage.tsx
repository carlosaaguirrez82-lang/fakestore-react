import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();

  const handleReturnLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h5>No tiene permisos para acceder a esta página, porfavor inicie sesión</h5>
      <button onClick={handleReturnLogin}>Ir a Login</button>
    </div>
  );
}
