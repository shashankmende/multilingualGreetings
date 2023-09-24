import './index.css'

const Greetings = props => {
  const {greet} = props
  const {imageUrl, imageAltText} = greet
  return (
    <div className="greet-container">
      <img src={imageUrl} alt={imageAltText} className="greeting-img" />
    </div>
  )
}

export default Greetings
