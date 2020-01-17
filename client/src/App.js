import React, {Component} from 'react';
import Axios from 'axios';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';
import './App.css';


class App extends Component {
  state = {
    player: []
  }

  componentDidMount() {
    Axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({
        player: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1 data-testid='appTitle' className='title'>Women's World Cup Google Trends</h1>
        <p data-testid='searchDates' className='dateRange'>June - July 2019</p>
        <div className='playerCards'>
        {this.state.player.map(player => (
          <PlayerCard
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}/>
        ))}
        </div>
        
      </div>
    );
  }
  
}


export default App;
