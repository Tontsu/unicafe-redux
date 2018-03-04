import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import {createStore} from 'redux'

const Statistiikka = ({ klik }) => {
  const palautteita = store.getState().total

  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState().good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{(store.getState().good - store.getState().bad) / store.getState().total}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{store.getState().good/store.getState().total * 100} %</td>
          </tr>
        </tbody>
      </table>

      <button onClick={klik('ZERO')}>nollaa</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({ type: nappi })
    console.log(store.getState())
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka klik = {this.klik}/>
      </div>
    )
  }
}

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)

export default App;
