import { gql } from 'graphql-request';

export const PAGE = gql`
  query Page($slug: String) {
    page(filter: { slug: { eq: $slug } }) {
      slug
      title
      content {
        content(markdown: false)
      }
      children {
        slug
        title
      }
      parent {
        title
        slug
      }
    }
  }
`;
