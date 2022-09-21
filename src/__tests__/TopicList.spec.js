import React from 'react';
import { render, screen } from '@testing-library/react';
import { TopicList } from '../components';

const mockSubmitFn = jest.fn();
const mockTopics = {
  name: 'mainTopic',
  relatedTopics: [
    {
      id: 1,
      name: 'topic1',
      starGazersCount: 10,
    },
    {
      id: 2,
      name: 'topic2',
      starGazersCount: 20,
    },
    {
      id: 3,
      name: 'topic3',
      starGazersCount: 30,
    },
  ],
};

describe('TopicList', () => {
  test('renders topics', () => {
    render(<TopicList topic={mockTopics} handleSubmit={mockSubmitFn} />);
    const topicItems = screen.getAllByTestId('topic-item');
    expect(topicItems).toHaveLength(3);
  });
  test('renders no related topic available', () => {
    render(
      <TopicList
        topic={{ name: 'asdfdf', relatedTopics: [] }}
        handleSubmit={mockSubmitFn}
      />
    );
    expect(screen.getByText('No Related Topics available')).toBeInTheDocument();
  });
});
