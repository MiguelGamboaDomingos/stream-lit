import { Card, CardContent, Typography } from '@mui/material';

const CustomCard = ({ title, cover, duration }) => {
  return (
    <Card sx={{ marginBottom: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white', borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.)' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography noWrap gutterBottom variant="h5" component="div" style={{ maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          Duração: {duration || 'Desconhecida'}
        </Typography>
        <Typography variant="body2" color="white">
          Autor: {duration || 'Desconhecido'}
        </Typography>
      </CardContent>
      <img
        src={cover || 'https://via.placeholder.com/150'}
        alt="Capa do media"
        style={{ width: '100%', objectFit: 'cover'}}
      />
    </Card>
  );
};

export default CustomCard;