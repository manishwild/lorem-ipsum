import React from 'react'
import text from './data'

const App = () => {
  const [count, setCount] = React.useState(0)
  const [data, setData] = React.useState([])

  function submitHandler(e) {
    e.preventDefault()
    // count is string i m changing it to number
  
    let amount = parseInt(count)

    if (count<= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setData(text.slice(0,amount))
  }
  return (
    <section className="section-center">
      <h3>Lorem Ipsum</h3>
      <form action="" className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraph: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
       
          {data.map((item, index) => {
            return  <p key={index}>{item}</p>
          })}
        
      </article>
    </section>
  )
}

export default App
