import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Style from '../../Assets/scss/Details.module.scss'
import camera from '../../Assets/img/camera.png'
import geo from '../../Assets/img/geo.png'
import heart from '../../Assets/img/heart.png'
import plan from '../../Assets/img/plan.png'


export const Details = () => {
    const { home_id } = useParams(0);
    const [homeDetails, setHomeDetails] = useState();

    useEffect(() => {
        const getDetails = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/homes/${home_id}`)
                setHomeDetails(result.data.item);
            }
            catch (err) {
                console.error(err)
            }
        }
        getDetails()
        console.log(homeDetails)
    }, [home_id])


    return (
            <section>
              <img src={homeDetails.images[0].filename.large} alt="house"></img>
              <section>
                <div>
                  <h3>{homeDetails.address}</h3>
                  <p>{homeDetails.zipcode + " " + homeDetails.city}</p>
                  <p>{homeDetails.type + " |" + homeDetails.floor_space + "m2 |" + homeDetails.num_rooms + " værelser"}</p>
                  <p>Set {homeDetails.num_clicks} gange</p>
                </div>
                <div><img src={camera} alt="camera" /><img src={plan} alt="plantegning" /><img src={geo} alt="geolokation" /><img src={heart} alt="like" /></div>
                <div>
                  <p className={Style.priceTxt}>Kontantpris <span>{homeDetails.price} DKK</span></p>
                  <p className={Style.downpay}>Udbetaling {homeDetails.payout} DKK</p>
                  <p>Ejerudgift per måned {homeDetails.cost} DKK</p>
                </div>
              </section>
              <section>
                <article>
                  <p>{homeDetails.description}</p>
                </article>
                <figure>
                  <h3>Kontakt</h3>
                  
                </figure>
              </section>
            </section>
    )
}
                          