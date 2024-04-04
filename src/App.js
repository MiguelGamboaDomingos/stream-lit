import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, Playlist } from './components';
import { fetchLocalMedia } from './utils/fetchLocalMedia';

const App = () => {
  const { audioFiles, videoFiles } = fetchLocalMedia();
  const [showPlaylist, setShowPlaylist] = React.useState(false);
  const [playlist, setPlaylist] = React.useState([]);

  return (
    <BrowserRouter>
      <Box 
        sx={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpeg)`, // Usando process.env.PUBLIC_URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Garantindo que o fundo cubra toda a tela
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar onPlaylistButtonClick={() => setShowPlaylist(!showPlaylist)} />
        <Box sx={{ flexGrow: 1, marginRight: showPlaylist ? 320 : 0, transition: 'margin-right 0.3s ease' }}>
          <Routes>
            <Route
              exact
              path="/"
              element={<Feed audioFiles={audioFiles} videoFiles={videoFiles} />}
            />
          </Routes>
        </Box>
        {showPlaylist && <Playlist playlist={playlist} onClose={() => setShowPlaylist(false)} />}
      </Box>
    </BrowserRouter>
  );
};

export default App;