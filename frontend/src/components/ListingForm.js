import axios from "axios";
import { useState } from "react"
import { Oval } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { listings } from "../rtk/slice/listings-slice";

function ListingForm() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        color: "Any",
        kilometers: "Any",
        has_photos: "1+",
        is_licensed: "false",
        days_listed: "Any",
        keywords: "",
        price: "Any",
        sale_type: "For Sale",
        car_type: "Any",
      fuel_type: "Any",
    });
    const { sale_type, price, color, fuel_type, car_type, kilometers, days_listed, has_photos, is_licensed, keywords } = formData
    const [loading,setLoading]=useState(false)
    const onChange = e => {
        if (e.target.type === 'checkbox') {
            setFormData({ ...formData, [e.target.name]: String(e.target.checked) });
        } else {
            
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
    const onSubmit = e => {
        e.preventDefault()
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = {
            sale_type,
            price,
            color,
            fuel_type,
            car_type,
            kilometers,
            days_listed,
            has_photos,
            is_licensed,
            keywords,
        };
        setLoading(true)
        try {
            axios
              .post("http://localhost:8000/api/listings/search", body, config)
              .then((res) => dispatch(listings(res.data)));
            window.scrollTo(0, 0);
            setLoading(false)

        } catch (err) {
            setLoading(false)
            window.scrollTo(0,0)
        }


    }

    
    return (
      <form className="listingform" onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-1-of-6">
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="sale_type">
                Sale or Rent
              </label>
              <select
                className="listingform__select"
                name="sale_type"
                onChange={(e) => onChange(e)}
                value={sale_type}
              >
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="kilometers">
                kilometers
              </label>
              <select
                className="listingform__select"
                name="kilometers"
                onChange={(e) => onChange(e)}
                value={kilometers}
              >
                <option>1000+</option>
                <option>1200+</option>
                <option>1500+</option>
                <option>2000+</option>
                <option>Any</option>
              </select>
            </div>
          </div>

          <div className="col-1-of-6">
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="price">
                Minimum Price
              </label>
              <select
                className="listingform__select"
                name="price"
                onChange={(e) => onChange(e)}
                value={price}
              >
                <option>$0+</option>
                <option>$200,000+</option>
                <option>$400,000+</option>
                <option>$600,000+</option>
                <option>$800,000+</option>
                <option>$1,000,000+</option>
                <option>$1,200,000+</option>
                <option>$1,500,000+</option>
                <option>Any</option>
              </select>
            </div>
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="days_listed">
                Days Listed
              </label>
              <select
                className="listingform__select"
                name="days_listed"
                onChange={(e) => onChange(e)}
                value={days_listed}
              >
                <option>1 or less</option>
                <option>2 or less</option>
                <option>5 or less</option>
                <option>10 or less</option>
                <option>20 or less</option>
                <option>Any</option>
              </select>
            </div>
          </div>

          <div className="col-1-of-6">
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="color">
                Color
              </label>
              <select
                className="listingform__select"
                name="color"
                onChange={(e) => onChange(e)}
                value={color}
              >
                <option>Red</option> 
                <option>Blue</option>
                <option>Black</option>
                <option>Brown</option>
                <option>Any</option>
              </select>
            </div>

            <div className="listingform__section">
              <label className="listingform__label" htmlFor="has_photos">
                Has Photos
              </label>
              <select
                className="listingform__select"
                name="has_photos"
                onChange={(e) => onChange(e)}
                value={has_photos}
              >
                <option>1+</option>
                <option>3+</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>
              </select>
            </div>
          </div>

          <div className="col-1-of-6">
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="car_type">
                Body Type
              </label>
              <select
                className="listingform__select"
                name="car_type"
                onChange={(e) => onChange(e)}
                value={car_type}
              >
                <option>Sedan</option>
                <option>Coupe</option>
                <option>Suv</option>
                <option>Hatchback</option>
                <option>Sports</option>
                <option>Any</option>
              </select>
            </div>
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="keywords">
                Keywords
              </label>
              <input
                className="listingform__input"
                name="keywords"
                type="text"
                onChange={(e) => onChange(e)}
                value={keywords}
              />
            </div>
          </div>

          <div className="col-1-of-6">
            <div className="listingform__section">
              <label className="listingform__label" htmlFor="fuel_type">
                Fuel Type
              </label>
              <select
                className="listingform__select"
                name="fuel_type"
                onChange={(e) => onChange(e)}
                value={fuel_type}
              >
                <option>Gasoline</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Ethanol</option>
                <option>Any</option>
              </select>
            </div>
            <div className="listingform__altsection">
              <label className="listingform__label" htmlFor="is_licensed">
                Is Licensed
              </label>
              <input
                className="listingform__checkbox"
                name="is_licensed"
                type="checkbox"
                onChange={(e) => onChange(e)}
                value={is_licensed}
              />
            </div>
          </div>

          <div className="col-1-of-6">
            {loading ? (
              <div className="listingform__loader">
                <Oval color="#424242" height={50} width={50} />
              </div>
            ) : (
              <button className="listingform__button listingform__button--primary">
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    );
}
export default ListingForm