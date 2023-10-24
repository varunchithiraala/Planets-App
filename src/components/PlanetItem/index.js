// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {name, imageUrl, description} = planetItemDetails

  return (
    <div className="planet-item-container">
      <img
        src={imageUrl}
        className="planet-item-image"
        alt={`planet ${name}`}
      />
      <h1 className="planet-item-heading">{name}</h1>
      <p className="planet-item-description">{description}</p>
    </div>
  )
}

export default PlanetItem
