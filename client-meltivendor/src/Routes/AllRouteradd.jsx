import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./AdminRouter/AdminRouter";
import PublicRouter from "./AllPublicRouter/PublicRouter";


const routers = createBrowserRouter([
    ...AdminRoute,
    ...PublicRouter
])

export default routers;