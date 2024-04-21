import { useParams } from "react-router-dom";
import SearchPage from "~/components/SearchPage";

function Search() {
    const { searchKey } = useParams();
    return (
        <SearchPage searchKey={searchKey} />
    );
}

export default Search;