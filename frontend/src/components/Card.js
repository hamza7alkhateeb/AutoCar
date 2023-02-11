import { Link } from "react-router-dom";



function Card(props) {
    const {
      address,
      car_type,
      city,
      color,
      fuel_type,
      kilometers,
      photo_main,
      price,
      sale_type,
      slug,
      state,
      title,
    } = props.listing;
          <img className="card__header__photo" src={photo_main} alt="Alt CarPhoto" />
    
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
      <div className="card">
        <h3 className="card__title">{title}</h3>
        <div className="card__header">
          <img
            className="card__header__photo"
            src={photo_main}
            alt="Alt CarPhoto"
          />
        </div>
        <p className="card__location">
          {address}, {city}, {state}
        </p>
        <div className="row">
          <div className="col-2-of-3">
            <p className="card__info">Price: ${numberWithCommas(price)}</p>
            <p className="card__info">Color: {color}</p>
            <p className="card__info">Fuel Type: {fuel_type}</p>
          </div>
          <div className="col-1-of-3">
            <p className="card__saletype">{sale_type}</p>
            <p className="card__cartype">{car_type}</p>
            <p className="card__kilometers">Kilometers: {kilometers}</p>
          </div>
        </div>
        <Link className="card__link" to={`/listings/${slug}`}>
          View Listing
        </Link>
      </div>
    );
}
export default Card