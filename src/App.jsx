import React from 'react';
import Player from './components/Player';
import Generator from './components/Generator';
import TrackList from './components/TrackList';

const App = () => (
  <div>
    <h1>MindSound</h1>
    <Generator />
    <Player />
    <TrackList />
  </div>
);

export default App;