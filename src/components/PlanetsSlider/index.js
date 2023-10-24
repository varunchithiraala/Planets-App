// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-slider-app-container" data-testid="planets">
      <h1 className="planets-slider-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetItemDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
