import { useEffect } from 'react';
import { AppRouter } from "./app/providers/RouterProvider";
import { useAuthStore } from "./app/store/useAuthStore";

const App = () => {
    const hydrate = useAuthStore((s) => s.hydrate);

    useEffect(() => {
        hydrate();
    }, [hydrate]);

    return <AppRouter />;
};

export default App;
