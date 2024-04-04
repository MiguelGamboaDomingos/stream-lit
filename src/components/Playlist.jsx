import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';

const Playlist = ({ playlists = [], onCreatePlaylist }) => {
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleToggleCreateForm = () => {
    setIsCreatingPlaylist(!isCreatingPlaylist);
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() !== '') {
      onCreatePlaylist(newPlaylistName);
      setNewPlaylistName('');
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '25%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        zIndex: 999,
        overflowY: 'auto',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        opacity: '0.8',
      }}
    >
      <Box>
        {isCreatingPlaylist ? (
          <div>
            <TextField
              variant="standard"
              placeholder="Nome da Playlist"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              sx={{
                marginTop: '200px',
                width: '95%',
                padding: '10px',
                backgroundColor: 'transparent',
                color: 'white',
                borderRadius: '40px',
                border: '1.5px solid White',
                '& input': {
                  color: 'White',
                },
              }}
            />

            <Button
              variant="contained"
              onClick={handleCreatePlaylist}
              sx={{ marginTop: '10px', borderRadius: '20px', backgroundColor: 'black', color: 'white' }}
            >
              Criar Playlist
            </Button>
            <Button
              variant="contained"
              onClick={handleToggleCreateForm}
              sx={{ marginTop: '10px', borderRadius: '20px', backgroundColor: 'black', color: 'white' }}
            >
              Cancelar
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleToggleCreateForm}
            sx={{ marginTop: '200px', marginBottom: '20px', borderRadius: '20px', backgroundColor: 'black', color: 'white' }}
          >
            Criar Nova Playlist
          </Button>
        )}
        {playlists.length === 0 && (
          <Typography variant="body1" sx={{ marginTop: '20px' }}>Nenhuma playlist adicionada</Typography>
        )}
      </Box>
      <List style={{ width: '100%', marginTop: 'auto' }}>
        {playlists.map((playlist, index) => (
          <ListItem key={index} button>
            <ListItemText primary={playlist} />
            <Button variant="contained" color="primary" startIcon={<PlayArrowIcon />}>Play</Button>
            <Button variant="contained" color="secondary" startIcon={<EditIcon />}>Editar</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Playlist;
