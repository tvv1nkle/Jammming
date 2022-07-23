import React, { Component } from "react";

//import App.css
import "./App.css";

//import 3 components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 'id1'
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 'id2'
      },
      {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: 'id3'
      },
      ],
      playlistName: '',
      playlistTracks: [{
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 'id1'
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 'id2'
      },]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return alert("Track already exists");
    } else {
      this.setState({
        playlistTracks: [
          ...this.state.playlistTracks, track
        ]
      })
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    })
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
