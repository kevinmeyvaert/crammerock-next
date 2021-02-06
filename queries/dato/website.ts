import { gql } from 'graphql-request';

import { Edition } from './edition';

const PageLinks = gql`
  fragment internalLink on InternalLinkRecord {
    label
    page {
      id
      slug
    }
  }
  fragment externalLink on ExternalLinkRecord {
    label
    link
  }
`;

export const WEBSITE = gql`
  query Website($locale: SiteLocale) {
    website(locale: $locale) {
      ticketingActive
      lineupActive
      displayTimeLayout
      displayStageLayout
      displayDayLayout
      activeEdition {
        ...edition
      }
      mainNavigation {
        __typename
        ...internalLink
        ...externalLink
      }
      footerNavigation {
        __typename
        ...internalLink
        ...externalLink
      }
    }
  }
  ${Edition}
  ${PageLinks}
`;
