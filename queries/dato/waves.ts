import { gql } from 'graphql-request';
import { responsiveImageFragment } from './fragments';

export const WAVES = gql`
  query Waves($edition: ItemId, $locale: SiteLocale) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup(locale: $locale) {
        id
        artistLevel
        artist {
          image {
            normal: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }) {
              ...responsiveImageFragment
            }
          }
          id
          name
          slug
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

export const WAVES_WITH_DAY = gql`
  query WavesWithDay($edition: ItemId, $locale: SiteLocale) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup(locale: $locale) {
        id
        artistLevel
        lineupDate
        artist {
          image {
            normal: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }) {
              ...responsiveImageFragment
            }
          }
          id
          name
          slug
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

export const WAVES_WITH_DAY_STAGE = gql`
  query WavesWithDayStage($edition: ItemId, $locale: SiteLocale) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup(locale: $locale) {
        id
        artistLevel
        lineupDate
        stage {
          name
          slug
          id
        }
        artist {
          image {
            normal: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }) {
              ...responsiveImageFragment
            }
          }
          id
          name
          slug
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

export const WAVES_WITH_DAY_STAGE_TIME = gql`
  query WavesWithDayStageTime($edition: ItemId, $locale: SiteLocale) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup(locale: $locale) {
        id
        artistLevel
        endTime
        lineupDate
        startTime
        stage {
          name
          slug
          id
        }
        artist {
          image {
            normal: responsiveImage(imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }) {
              ...responsiveImageFragment
            }
          }
          id
          name
          slug
        }
      }
    }
  }
  ${responsiveImageFragment}
`;
