import Style from '../../Assets/scss/HouseCard.module.scss'

export const HouseCard = ({img, address, zip, city, type, energy, rooms, area, price }) => {

  return (
    <figure className={Style.figure}>
      <img src={img} alt='house' className={Style.img}></img>
      <h3>{address}</h3>
      <strong>{zip} {city}</strong>
      <p>{type}</p>
      <div className={Style.bottom}>
        <div><span className={Style.energy}>{energy}</span><span>{rooms} værelser, {area}m2</span></div>
        <strong>{price} DKK</strong>
      </div>
    </figure>
  )
}
