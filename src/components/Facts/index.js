import './index.css'

const Facts = props => {
  const {banner} = props

  return (
    <>
      <li className="facts">{banner}</li>
    </>
  )
}

export default Facts
