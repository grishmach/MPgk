import {Link} from 'react-router-dom'
import './index.css'
import {BiChevronRightSquare} from 'react-icons/bi'
// import '../../fonts/HKGrotesk-Regular.otf' //

const SearchResult = props => {
  const {statename, statecode, id} = props

  return (
    <li>
      <Link to={`/state/${id}`} className="search">
        <div className="search">
          <h1 className="heading font-face-gm">{statename}</h1>
          <button type="button" className="button">
            {statecode}

            <BiChevronRightSquare
              testid="searchResultChevronRightIcon"
              alt="line icon"
              className="icon"
            />
          </button>
        </div>
      </Link>
    </li>
  )
}
export default SearchResult
