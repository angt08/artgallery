

import { getData } from './components/services/artg'
import './App.css';




class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      artData: {},
      value: ''
    }
  } 
    handleChange = (event) => {
      this.setState({
          value:event.target.value
        })
    }
    
    handleSubmit = async (event) => {
      event.preventDefault()
      let artData = await getData(this.state.value)
      this.setState({
        artData:artData
      })
    }


    render() {
      return (
  
    <div className="App">
      <header className="App-header">

      <button>
          Gallry entrance
            
      </button>

      </header>
    </div>
);

}
  
}
  

export default App;
