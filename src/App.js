import { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { TopicList, SearchBar } from './components';
import { TopicsQuery } from './graphql/query';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './theme';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
const App = () => {
  const [topicName, setTopicName] = useState('react');

  const {
    loading,
    error,
    data: { topic } = {},
    refetch,
  } = useQuery(TopicsQuery, {
    variables: { name: topicName },
  });

  const handleSubmit = (newTopicName) => {
    setTopicName(newTopicName);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          padding: '2rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Stack spacing={3}>
          <Typography variant='h1'>Github Topic Explorer</Typography>
          <SearchBar handleSubmit={handleSubmit} topicName={topicName} />
          {loading ? (
            <Typography>
              <CircularProgress /> Loading...
            </Typography>
          ) : error ? (
            <Card>
              <Typography>Something went wrong</Typography>
              <Button onClick={() => refetch()}>Retry</Button>
            </Card>
          ) : (
            <TopicList topic={topic} setTopicName={setTopicName} />
          )}
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
