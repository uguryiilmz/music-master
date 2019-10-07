import React, {Component} from 'react';
import logo from './logo.svg';
import Artist from './Artist/Artist'
import './App.css'
import Tracks from './Tracks/Tracks'
import Search from '../src/Search/Search'



const API_ADDRESS='https://spotify-api-wrapper.appspot.com'

class App extends Component {

  state={
    artist:null,
    tracks:[]
  }

  componentDidMount(){
    this.searchArtist('red hot')
  }


  searchArtist=(artistQuery)=>{
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    .then(response=>response.json())
    .then(json=>{
      if(json.artists.total>0){
        const artist=json.artists.items[0]
        this.setState({artist})

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(results=>results.json())
        .then(json=>{
          this.setState({tracks:json.tracks})
        })
        .catch(error=>alert(error.message))
      }
    })
    .catch(error=>alert(error.message))

  }





  render(){

    console.log('this state is', this.state)

    return(
      <div className="app-div">
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    )
  }
}
export default App;
