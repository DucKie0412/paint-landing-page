import { useParams } from "react-router-dom";
import ShowProduct from "~/components/ShowProduct";


function ProductDetail() {
    const {id} = useParams();
    return (
        <ShowProduct productID={id}/>
    );
}

export default ProductDetail;