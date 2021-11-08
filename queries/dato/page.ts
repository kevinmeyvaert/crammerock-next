import { gql } from 'graphql-request';
import { responsiveImageFragment } from './fragments';

export const PAGE = gql`
  query Page($slug: String) {
    page(filter: { slug: { eq: $slug } }) {
      slug
      title
      featuredImage {
        opengraph: responsiveImage(imgixParams: { fit: crop, w: 1200, h: 630, auto: format }) {
          ...responsiveImageFragment
        }
      }
      content {
        value
        blocks {
          __typename
          content(markdown: true)
          title
          id
        }
      }
      children {
        slug
        title
        featuredImage {
          thumbnail: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
      parent {
        title
        slug
        children {
          slug
          title
          featuredImage {
            thumbnail: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format }) {
              ...responsiveImageFragment
            }
          }
        }
      }
    }
  }

  ${responsiveImageFragment}
`;
