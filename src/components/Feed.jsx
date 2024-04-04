import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import CustomCard from './CustomCard';
import { Headphones, Videocam } from '@mui/icons-material';

const Feed = ({ audioFiles, videoFiles }) => {
 return (
  <div style={{ 
   margin: '0 auto', 
   padding: '0 20px', 
   maxWidth: 1200, 
   background: 'transparent',
   position: 'relative', // Adicione position: 'relative'
  }}>
   <Grid container spacing={2}>
    <Grid item xs={12}>
    <h2 style={{ textAlign: 'center', color: 'white', paddingTop: '20px', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#ffffff', paddingTop: '6px', paddingRight: '5px' }}><Headphones /></span>
      Arquivos de Áudio:
     </h2>
    </Grid>
    {audioFiles.map((audio, index) => (
     <Grid item key={`audio-${index}`} xs={12} sm={6} md={3} lg={3}>
      <CustomCard title={audio.name} cover={audio.cover} duration={audio.duration} author={audio.author} />
     </Grid>
    ))}
   </Grid>

   <Grid container spacing={2}>
    <Grid item xs={12}>
    <h2 style={{ textAlign: 'center', color: 'white', paddingTop: '20px', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#ffffff', paddingTop: '6px', paddingRight: '5px' }}><Videocam /></span>
      Arquivos de Vídeo:
     </h2>
    </Grid>
    {videoFiles.map((video, index) => (
     <Grid item key={`video-${index}`} xs={12} sm={6} md={3} lg={3}>
      <CustomCard title={video.name} cover={video.cover} duration={video.duration} author={video.author} />
     </Grid>
    ))}
   </Grid>
  </div>
 );
};

export default Feed;