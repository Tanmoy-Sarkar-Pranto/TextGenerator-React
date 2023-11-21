import { useState } from "react"
import text from "./data"

const App = () => {
  const [count, setCount] = useState(1)
  const [newText, setNewText] = useState([])
  const [showHiddenText, setShowHiddenText] = useState(false)
  const handleChange = (e) => {
    setCount(e.target.value)
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempText = text.slice(0, count)
    setNewText(tempText)
  }
  // console.log(count)
  // console.log(newText)
  const toggleHiddenText = () => {
    setShowHiddenText(!showHiddenText)
  }
  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <span>
        <button onClick={toggleHiddenText} className="btn">
          ?
        </button>
        <span style={{ display: showHiddenText ? "block" : "none" }}>
          This is also boring as not being truly random
        </span>
      </span>
      <form action="" className="lorem-form">
        <label htmlFor="count">Paragraph</label>
        <input
          type="number"
          name="count"
          id="count"
          min={1}
          max={8}
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <section className="lorem-text">
        {newText.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </section>
    </section>
  )
}
export default App
