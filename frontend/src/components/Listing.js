import { useSelector } from "react-redux"
import Card from "./Card";


function Listings(props) {
    const {currentListings} =props
    const listings = currentListings;
    
    const getListings = () => {
        let listingsOnPage = [];
        let result = [];
        listings.map(listing => {
            return listingsOnPage.push(
                <Card 
                listing ={listing}
              />
            );
        })

        for (let i = 0; i < listings.length; i += 3){
            result.push(
                <div className="row" key={i}>
                <div className="col-1-of-3">{listingsOnPage[i]}</div>
                <div className="col-1-of-3">{listingsOnPage[i]?listingsOnPage[i+1]:null}</div>
                <div className="col-1-of-3">{listingsOnPage[i]?listingsOnPage[i+2]:null}</div>
              </div>
            );
        }
    
        
        return result;


    }
    
    
    return (<>{ getListings() }
    </>);
}
export default Listings