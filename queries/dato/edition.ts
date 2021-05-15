import { gql } from 'graphql-request';
import { HomepageIframe, HomepageImage } from './homepage';
import { Sponsor } from './sponsor';

export const Edition = gql`
  fragment edition on EditionRecord {
    id
    logo {
      responsiveImage(imgixParams: { fit: max, w: 300, h: 300, auto: format }) {
        # HTML5 src/srcset/sizes attributes
        srcSet
        webpSrcSet
        sizes
        src

        # size information (post-transformations)
        width
        height
        aspectRatio

        # SEO attributes
        alt
        title

        # background color placeholder or...
        bgColor

        # blur-up placeholder, JPEG format, base64-encoded
        base64
      }
    }
    endDate
    facebookEvent
    startDate
    title
    sponsors {
      ...sponsor
    }
    homepageBlocks {
      ...homepageImage
      ...homepageIframe
    }
  }
  ${Sponsor}
  ${HomepageImage}
  ${HomepageIframe}
`;
