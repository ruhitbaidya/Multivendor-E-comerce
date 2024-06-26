import Root from "../../Components/Root/Root";

import Home from "../../Pages/Home/Home";


const PublicRouter = [
    {
        path : "/",
        element : <Root />,
        children : [
            {
                path : "/",
                element : <Home />
            }
        ]
    }
]

export default PublicRouter