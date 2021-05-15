import { gql } from 'graphql-request';

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
  query NewsOverview($locale: SiteLocale) {
    news: allNews(
      orderBy: _publishedAt_DESC
      locale: $locale
    ) {
      title
      slug
      _publishedAt
      featuredImage {
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
  }

  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;
