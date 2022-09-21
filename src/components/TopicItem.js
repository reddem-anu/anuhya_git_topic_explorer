import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export const TopicItem = ({ topic: { name, stargazerCount }, handleClick }) => {
  return (
    <Grid item lg={4} md={6} xs={12} data-testid='topic-item'>
      <Card sx={{ '&:hover': { transform: 'scale(1.05)' } }}>
        <CardContent>
          <Button
            fullWidth
            onClick={() => handleClick(name)}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography>{name}</Typography>
            <Chip
              icon={<StarOutlineIcon />}
              label={`${stargazerCount}`}
              variant='outlined'
            />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
