import { gql } from "graphql-request";
import { Edition } from "./edition";

const PageLinks = gql`
  fragment internalLink on InternalLinkRecord {
    label
    page {
      id
    }
  }
  fragment externalLink on ExternalLinkRecord {
    label
    link
  }
`;

export const WEBSITE = gql`
  query Website {
    website {
      ticketingActive
      lineupActive
      displayTimeLayout
      displayStageLayout
      displayDayLayout
      activeEdition {
        ...edition
      }
      mainNavigation {
        ...internalLink
        ...externalLink
      }
      footerNavigation {
        ...internalLink
        ...externalLink
      }
    }
  }
  ${Edition}
  ${PageLinks}
`;
