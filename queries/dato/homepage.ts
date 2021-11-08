import { gql } from 'graphql-request';
import { responsiveImageFragment } from './fragments';

export const HomepageImage = gql`
  fragment homepageImage on ImageRecord {
    type: __typename
    id
    size
    asset {
      square: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 1000, auto: format }) {
        ...responsiveImageFragment
      }
      normal: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 750, auto: format }) {
        ...responsiveImageFragment
      }
      long: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format }) {
        ...responsiveImageFragment
      }
    }
  }

  ${responsiveImageFragment}
`;

export const HomepageIframe = gql`
  fragment homepageIframe on IframeRecord {
    type: __typename
    id
    size
    iframeEmbedUrl
  }
`;
