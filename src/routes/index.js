import config from "~/configs";
import Home from "~/pages/Home";

//public route
const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}