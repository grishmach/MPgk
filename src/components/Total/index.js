import {Link} from 'react-router-dom'
import './index.css'

const Total = props => {
  const {data} = props
  const {
    stateName,
    confirmed,
    recovered,
    deceased,
    other,
    population,
    stateCode,
  } = data
  const active = confirmed - recovered - deceased - other

  return (
    <>
      <li className="all-cases">
        <div className="home-container">
          <Link to={`/state/${stateCode}`} className="home-link">
            <p>{stateName}</p>
          </Link>
        </div>
        <div>
          <p>{confirmed}</p>
        </div>

        <div>
          <p>{active}</p>
        </div>

        <div>
          <p>{recovered}</p>
        </div>

        <div>
          <p>{deceased}</p>
        </div>

        <div>
          <p>{population}</p>
        </div>
      </li>
    </>
  )
}
export default Total
