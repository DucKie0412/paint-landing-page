import config from "~/configs";
import Contact from "~/pages/Contact";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import ProductDetail from "~/pages/ProductDetail";

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
    },
    {
        path: config.routesConfig.productDetail,
        component: ProductDetail
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}