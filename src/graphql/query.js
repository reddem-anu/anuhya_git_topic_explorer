export const TopicsQuery = `
query Topics($name: String!) { 
  topic(name: $name) {
    id
    name
    stargazerCount
    relatedTopics(first:10) {
      id
      name
      stargazerCount
    }
  }
}
`;
