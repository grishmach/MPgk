import './index.css'

const EachDistrictData = props => {
  const {number, name} = props
  return (
    <li className="style">
      <p className="numbers">{number}</p>
      <p className="names">{name}</p>
    </li>
  )
}
export default EachDistrictData
