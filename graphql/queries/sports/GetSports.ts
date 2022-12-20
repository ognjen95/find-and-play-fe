import { gql } from '@apollo/client';

const GetSportsQuery = gql`
  query getSports {
    sports {
      id
      name
      image    
    } 
  }
`;

export default GetSportsQuery;
