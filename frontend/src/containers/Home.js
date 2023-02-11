import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux'
import Listings from '../components/Listing';
import ListingForm from '../components/ListingForm';
import Pagination from '../components/Pagination';

function Home() {
    const listings =useSelector(state=>state.listings)

    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(3);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(
      indexOfFirstListing,
      indexOfLastListing
    );

    const visitPage = (page) => {
        setCurrentPage(page)
        setActive(page)
    }
    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length / 3)) {
            setActive(currentPage+1)
            setCurrentPage(currentPage + 1);
        }
    }
    const previous_number = () => {
        if (currentPage !== 1) {
            setActive(currentPage - 1)
            setCurrentPage(currentPage - 1)
            
        }
    }

    
    
    
    return (
      <main className="home">
        <Helmet>
          <title>Auto Car - Home</title>
          <meta name="description" content="Auto Car Home Page" />
            </Helmet>
            
        <section className="car__form">
          <ListingForm />
        </section>
        <section className="home__listings">
          <Listings currentListings={currentListings} />
        </section>
        <section className="home__pagination">
          <div className="row">
            {listings.length !== 0 ? (
              <Pagination
                itemsPerPage={listingsPerPage}
                count={listings.length}
                visitPage={visitPage}
                previous={previous_number}
                next={next_number}
                active={active}
              />
            ) : null}
          </div>
        </section>
      </main>
    );
}
export default Home