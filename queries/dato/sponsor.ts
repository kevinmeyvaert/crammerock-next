import { gql } from 'graphql-request';

export const Sponsor = gql`
  fragment sponsor on SponsorRecord {
    website
    name
    logo {
      url
    }
    displayLogo
    displayFooter
  }
`;
