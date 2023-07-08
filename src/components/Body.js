import RestuarantCard from "./RestuarantCard"
import resList from "../utils/mockdata"

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restuarant-container">
                {
                    resList.map((restaurant,index)=>(
                        <RestuarantCard key={index} resData={restaurant.data}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body