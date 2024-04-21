import config from "~/configs";
import Contact from "~/pages/Contact";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import ProductDetail from "~/pages/ProductDetail";
import Search from "~/pages/Search";

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
    },
    {
        path: config.routesConfig.search,
        component: Search
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}