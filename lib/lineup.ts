import {
  WAVES,
  WAVES_WITH_DAY,
  WAVES_WITH_DAY_STAGE,
  WAVES_WITH_DAY_STAGE_TIME,
} from '@/queries/dato/waves';
import { LineupItemRecord, WavesQuery, WebsiteQuery } from '@/types/dato.types';

export const fetchRequiredLineupData = (website: WebsiteQuery['website']) => {
  if (website.displayDayLayout && website.displayStageLayout && website.displayTimeLayout) {
    return WAVES_WITH_DAY_STAGE_TIME;
  }
  if (website.displayDayLayout && website.displayStageLayout) {
    return WAVES_WITH_DAY_STAGE;
  }
  if (website.displayDayLayout) {
    return WAVES_WITH_DAY;
  }
  return WAVES;
};

export const flattenWaves = (waves: WavesQuery['waves']): LineupItemRecord[] => {
  return waves.reduce((lineup, wave) => [...lineup, ...wave.lineup], []);
};
