import Register from "../components/registre/register";
import Dashboard from "../dashboard";

import ProtectedRoute from "../ProtectedRoute";

const getRoutes = (login) => [
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute login={login}>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
];

export default getRoutes;