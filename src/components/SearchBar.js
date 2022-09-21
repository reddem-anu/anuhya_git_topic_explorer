import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export const SearchBar = ({ topicName, handleSubmit }) => {
  const [newTopicName, setNewTopicName] = useState(topicName);

  useEffect(() => {
    setNewTopicName(topicName);
  }, [topicName]);

  const onChange = (e) => {
    setNewTopicName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(newTopicName);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-topic-name'>Topic</InputLabel>
        <OutlinedInput
          id='outlined-adornment-topic-name'
          value={newTopicName}
          onChange={onChange}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='Search Button' edge='end' type='submit'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label='Topic'
        />
      </FormControl>
    </form>
  );
};
