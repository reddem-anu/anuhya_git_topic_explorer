import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Grid from '@mui/material/Grid';
import { TopicItem } from './TopicItem';

export const TopicList = ({ topic, setTopicName }) => {
  return (
    <>
      <Typography variant='h2'>
        {topic.name}
        <Chip
          sx={{ marginLeft: 2 }}
          icon={<StarOutlineIcon />}
          label={`${topic.stargazerCount}`}
          variant='outlined'
        />
      </Typography>
      <Typography variant='h3'>Related Topics</Typography>
      {!topic.relatedTopics.length ? (
        <Typography>No Related Topics available</Typography>
      ) : (
        <Grid container spacing={2}>
          {topic.relatedTopics.map((item) => (
            <TopicItem topic={item} key={item.id} handleClick={setTopicName} />
          ))}
        </Grid>
      )}
    </>
  );
};
