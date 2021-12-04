import { gql } from 'graphql-request';
import { responsiveImageFragment } from './fragments';

export const WAVES = gql`
  query Waves($edition: ItemId) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup {
        id
        artistLevel
        image {
          normal: responsiveImage(
            imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }
          ) {
            ...responsiveImageFragment
          }
        }
        id
        name
        slug
      }
    }
  }
  ${responsiveImageFragment}
`;

export const WAVES_WITH_DAY = gql`
  query WavesWithDay($edition: ItemId) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup {
        id
        artistLevel
        lineupDate
        image {
          normal: responsiveImage(
            imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }
          ) {
            ...responsiveImageFragment
          }
        }
        id
        name
        slug
      }
    }
  }
  ${responsiveImageFragment}
`;

export const WAVES_WITH_DAY_STAGE = gql`
  query WavesWithDayStage($edition: ItemId) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup {
        id
        artistLevel
        lineupDate
        stage {
          name
          slug
          id
        }
        image {
          normal: responsiveImage(
            imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }
          ) {
            ...responsiveImageFragment
          }
        }
        id
        name
        slug
      }
    }
  }
  ${responsiveImageFragment}
`;

export const WAVES_WITH_DAY_STAGE_TIME = gql`
  query WavesWithDayStageTime($edition: ItemId) {
    waves: allWaves(filter: { edition: { eq: $edition } }) {
      lineup {
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
        image {
          normal: responsiveImage(
            imgixParams: { fit: crop, w: 1000, h: 500, auto: format, crop: faces }
          ) {
            ...responsiveImageFragment
          }
        }
        id
        name
        slug
      }
    }
  }
  ${responsiveImageFragment}
`;
