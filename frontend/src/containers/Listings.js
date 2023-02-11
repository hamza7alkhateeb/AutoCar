import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
function Listings() {


    const [listings, setListings] = useState([]);
    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState("");
    const [next, setNext] = useState("");
    const [active, setActive] = useState(1);

    useEffect(() => {
      window.scrollTo(0, 0);

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8000/api/listings/?page=1`
          );

          setListings(res.data.results);
          setCount(res.data.count);
          setPrevious(res.data.previous);
          setNext(res.data.next);
        } catch (err) {}
      };

      fetchData();
    }, []);


    const visitPage = (page) => {
      axios
        .get(`http://localhost:8000/api/listings/?page=${page}`)
        .then((res) => {
          setListings(res.data.results);
          setPrevious(res.data.previous);
          setNext(res.data.next);
          setActive(page);
        })
        .catch((err) => {});
    };
    const previous_number = () => {
      axios
        .get(previous)
        .then((res) => {
          setListings(res.data.results);
          setPrevious(res.data.previous);
          setNext(res.data.next);
          if (previous) setActive(active - 1);
        })
        .catch((err) => {});
    };

    const next_number = () => {
      axios
        .get(next)
        .then((res) => {
          setListings(res.data.results);
          setPrevious(res.data.previous);
          setNext(res.data.next);
          if (next) setActive(active + 1);
        })
        .catch((err) => {});
    };


    const displayListings = () => {
      let display = [];
      let result = [];

      listings.map((listing) => {
        return display.push(<Card listing={listing} />);
      });

      for (let i = 0; i < listings.length; i += 3) {
        result.push(
          <div key={i} className="row">
            <div className="col-1-of-3">{display[i]}</div>
            <div className="col-1-of-3">
              {display[i + 1] ? display[i + 1] : null}
            </div>
            <div className="col-1-of-3">
              {display[i + 2] ? display[i + 2] : null}
            </div>
          </div>
        );
      }

      return result;
    };

  return (
    <main className="listings">
      <Helmet>
        <title>Auto Car - Listings</title>
        <meta name="description" content="Listings page" />
      </Helmet>
      <section className="listings__listings">{displayListings()}</section>
      <section className="listings__pagination">
        <div className="row">
          <Pagination
            itemsPerPage={3}
            count={count}
            visitPage={visitPage}
            previous={previous_number}
            next={next_number}
            active={active}
            setActive={setActive}
          />
        </div>
      </section>
    </main>
  );
}
export default Listings;
