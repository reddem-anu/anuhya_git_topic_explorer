import { GraphQLClient, ClientContext } from 'graphql-hooks';

export const client = new GraphQLClient({
  url: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

export const ClientProvider = (props) => (
  <ClientContext.Provider value={client} {...props} />
);
