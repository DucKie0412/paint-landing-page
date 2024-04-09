import config from "~/configs";
import Contact from "~/pages/Contact";
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
    },
    {
        path: config.routesConfig.contact,
        component: Contact
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}