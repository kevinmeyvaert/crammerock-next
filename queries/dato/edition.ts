import { gql } from "graphql-request";
import { Sponsor } from "./sponsor";

export const Edition = gql`
  fragment edition on EditionRecord {
    logo {
      url
    }
    endDate
    facebookEvent
    startDate
    title
    sponsors {
      ...sponsor
    }
  }
  ${Sponsor}
`;
