import MainLayout from "../layouts/MainLayout";
import { Card, CardContent, Typography, Grid, Box, Fade } from '@mui/material';
import { useUsers } from '../../app/useCases/useUsers';
import { LoadingScreen } from "../components/LoadingScreen";

const UsersPage = () => {
    const { data, isLoading } = useUsers();

    if (isLoading) return (
        <MainLayout>

        </MainLayout>
    )


    return (
        <MainLayout>
            <Typography variant='h2'>Usuarios</Typography>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <Fade in={!isLoading} timeout={1000}>
                    <Grid container spacing={4}>
                        {data?.map((u) => (
                            <Grid key={u.id} size={{ xs: 12, sm: 5, md: 3 }}>
                                <Card key={u.id}>{/*Contenedor de la tarjeta */}
                                    <CardContent>{/*Zona de texto principal */}
                                        <Typography>{u.name.firstname} {u.name.lastname}</Typography>
                                        <Typography>{u.username} - {u.email}</Typography>
                                        <Typography>Password: {u.password}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            )}

        </MainLayout>
    )
}

export default UsersPage;