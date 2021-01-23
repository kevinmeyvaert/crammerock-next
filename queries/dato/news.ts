import { gql } from "graphql-request";

export const NEWS = gql`
  query News($slug: String) {
    news(filter: { slug: { eq: $slug } }) {
      title
      slug
      seo {
        description
        image {
          url
        }
        twitterCard
      }
      featuredImage {
        blurhash
        url
      }
      article {
        content(markdown: false)
      }
    }
  }
`;

export const NEWS_OVERVIEW = gql`
  query NewsOverview($edition: ItemId) {
    news(filter: { edition: { eq: $edition } }, orderBy: _createdAt_DESC) {
      title
      slug
      featuredImage {
        blurhash
        url
      }
    }
  }
`;
