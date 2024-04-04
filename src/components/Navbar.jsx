import React, { useState } from 'react';
import { Stack, IconButton, Typography } from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Playlist from './Playlist'; // Importe o componente Playlist aqui

const Navbar = ({ playlists, onPlaylistSelect, onCreatePlaylist }) => {
  const [showPlaylist, setShowPlaylist] = useState(false);

  const handleTogglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" p={2} sx={{ backgroundColor: 'rgba(0, 0, 255, 0.5)', backgroundImage: `url(${process.env.PUBLIC_URL}/nav.jpeg)`, position: 'sticky', top: 0, justifyContent: "space-between", zIndex: 9999 }}>
        <div style={{ paddingTop: '4%', paddingBottom: '2%', paddingLeft: '8%', display: 'flex', alignItems: 'center', width: '40%' }}>
          <img src={`${process.env.PUBLIC_URL}/lit.png`} alt="logo" height={80} style={{ marginLeft: '10px', borderRadius: '50%' }} />
          <Typography variant="h1" component="div" color="white" sx={{ marginTop: 2 }}>
            Stream Lit
          </Typography>
        </div>
        <IconButton onClick={handleTogglePlaylist} sx={{ marginTop: ' 80px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.04)', width: '70px', height: '70px', borderRadius: '10px' }}>
          <PlaylistPlayIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Stack>
      {showPlaylist && (
        <Playlist playlists={playlists} onCreatePlaylist={onCreatePlaylist} />
      )}
    </>
  );
};

export default Navbar;
