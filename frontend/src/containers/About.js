import React , {useState, useEffect,Fragment} from "react";
import axios from 'axios'
import { Helmet } from 'react-helmet'
import AboutImage from '../assets/images/AboutImage.jpg'

function About() {
    const [topSeller, setTopSeller] = useState([])
    const [traders, setTraders] = useState([]);
    useEffect(() => {
        axios.defaults.headers = {
            "Content-Type":"application/json"
        }
        const getTopSeller = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/traders/topseller") 
                setTopSeller(res.data);
            } catch (err) {
            }
        }
        getTopSeller()
    }, [])
    useEffect(() => {
        axios.defaults.headers = {
            "Content-Type":"application/json"
        }
        const getTraders = async () => {
          try {
            const res = await axios.get(
              "http://localhost:8000/api/traders/"
            );
            setTraders(res.data);
          } catch (err) {}
        };
        getTraders();
    }, [])

    const getAllTraders = () => {
        let allTraders = [];
        let results = []
        
        traders.map((trader) => {
          return allTraders.push(
            <Fragment key={trader.id}>
              <div className="about__display">
                <img
                  className="about__display__image"
                  src={trader.photo}
                  alt=""
                />
              </div>
              <h3 className="about__trader">{trader.name}</h3>
              <p className="about__contact">{trader.phone}</p>
              <p className="about__contact">{trader.email}</p>
              <p className="about__about">{trader.description}</p>
            </Fragment>
          );
        });


        for (let i = 0; i < traders.length; i += 3) {
          results.push(
            <div key={i} className="row">
              <div className="col-1-of-3">{allTraders[i]}</div>
              <div className="col-1-of-3">
                {allTraders[i + 1] ? allTraders[i + 1] : null}
              </div>
              <div className="col-1-of-3">
                {allTraders[i + 2] ? allTraders[i + 2] : null}
              </div>
            </div>
          );
        }

        return results;



    }

    const getTopSeller = () => {
      let result = [];

      topSeller.map((seller) => {
        return result.push(
          <Fragment key={seller.id}>
            <div className="about__display">
              <img
                className="about__display__image"
                src={seller.photo}
                alt=""
              />
            </div>
            <h3 className="about__topseller">Top Seller:</h3>
            <p className="about__trader">{seller.name}</p>
            <p className="about__contact">{seller.phone}</p>
            <p className="about__contact">{seller.email}</p>
            <p className="about__about">{seller.description}</p>
          </Fragment>
        );
      });

      return result;
    };


    

  return (
    <main className="about">
      <Helmet>
        <title>Auto Car - About</title>
        <meta name="description" content="About us" />
      </Helmet>
      <header className="about__header">
        <h1 className="about__heading">About Auto Car</h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the perfect Car for you
            </h2>
            <p className="about__paragraph">
              The BMW M8 automobiles are all about highly emotive, desirable and
              sporting luxury high-performance. The targeted refreshing in
              spring 2022 will include eight new exterior colours, a new wheel
              design and, in the interior, a high-resolution Control Display now
              measuring 12.3 inches. At the start of 2022, the year marking the
              50th anniversary of BMW M GmbH, customers can also take advantage
              of a limited-time offer to have their BMW M8 models fitted with a
              special emblem at the front, rear and on the wheel hubs. Featuring
              three colours, this evokes the BMW Motorsport emblem from the
              early 1970s.
            </p>
            <div className="about__display">
              <img className="about__display__image" src={AboutImage} alt="" />
            </div>
            <p className="about__paragraph">
              The new Alcantara Bicolour design will come as standard for all
              BMW M8 models – both for the standard M Sport seats and the
              optional M Carbon bucket seats. Another standard feature for the
              BMW M8 Gran Coupé is the 4 zone air conditioning system. BMW M8
              customers can create a particularly eye-catching look with the
              exclusive M Carbon exterior package. This uses exposed high-tech
              carbon material to highlight elements such as the Air Curtains on
              the sides of the front bumper, the exterior mirror caps, the M
              rear spoiler and the rear diffuser. Moreover, the new BMW M8
              models can now be ordered in eight new exterior colours. These
              include the metallic Skyscraper Grey paint and various Frozen
              finishes such as BMW Individual Frozen Tanzanite Blue and BMW
              Individual Frozen Deep Green.
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet out awesome team!</h2>
        </div>
        {getAllTraders()}
      </section>
    </main>
  );
}
export default About;
