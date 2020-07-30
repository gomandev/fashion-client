import React from "react"
import SEO from "../components/seo"
import '../components/style.css'
import Project from '../components/Project'
import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const LAUNCH_DATA = gql`
  query LaunchData {
    launches {
      flight_number
      mission_name
      launch_success
      launch_date_local
    }
  }
`;
const IndexPage = () => {
  const { loading, error, data } = useQuery(LAUNCH_DATA);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data)
  return (
  
    <ApolloProvider client={client}>
      <SEO title="Home" />
      <Project />
    </ApolloProvider>
  )
} 


export default IndexPage
