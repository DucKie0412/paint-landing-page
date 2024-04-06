import config from "~/configs";
import Home from "~/pages/Home";
import Product from "~/pages/Product";

//public route
const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home
    },
    {
        path: config.routesConfig.product,
        component: Product
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}