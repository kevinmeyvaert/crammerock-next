import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import HeaderNavigation from '@/components/HeaderNavigation';
import MainGrid from '@/components/MainGrid';
import MainNavigation from '@/components/MainNavigation';
import { WEBSITE } from '@/queries/dato/website';
import { WavesQuery, WebsiteQuery } from '@/types/dato.types';

import { fetchDato } from '../../lib/api';
import Footer from '@/components/Footer';
import { WAVES } from '@/queries/dato/waves';
import { fetchRequiredLineupData, flattenWaves } from 'lib/lineup';
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  NewsCardDate,
} from '@/components/homepage/HomeContent';
import { format } from 'date-fns';
import nl from 'date-fns/locale/nl';
import { ContentGrid } from '@/components/ContentGrid';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Lineup: FC<Props> = ({ activeEdition, mainNavigation, lineup }) => {
  return (
    <>
      <Head>
        <title>{activeEdition.title}</title>
      </Head>
      <MainGrid.Grid>
        <MainNavigation navigationItems={mainNavigation} activeEdition={activeEdition} />
        <HeaderNavigation activeEdition={activeEdition} />
        <MainGrid.Main>
          <ContentGrid>
            {lineup &&
              lineup.map((lineupItem) => (
                <Card type="d" key={lineupItem.id} orange>
                  {lineupItem.artist.image.normal && (
                    <CardImage data={lineupItem.artist.image.normal} />
                  )}
                  <CardBody>
                    {lineupItem.lineupDate && (
                      <NewsCardDate dateTime={lineupItem.lineupDate}>
                        {format(new Date(lineupItem.lineupDate), 'EEEE', {
                          locale: nl,
                        })}
                      </NewsCardDate>
                    )}
                    <CardTitle>{lineupItem.artist.name}</CardTitle>
                  </CardBody>
                </Card>
              ))}
          </ContentGrid>
        </MainGrid.Main>
        <MainGrid.Footer />
      </MainGrid.Grid>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const { website } = await fetchDato<WebsiteQuery>(WEBSITE, { variables: { locale } });
  // lineup not active.
  if (!website.lineupActive) {
    return {
      props: {
        lineup: null,
        ...website,
      },
    };
  }
  // lineup active.
  const { waves } = await fetchDato<WavesQuery>(fetchRequiredLineupData(website), {
    variables: { locale, edition: website.activeEdition.id },
  });
  const lineup = flattenWaves(waves);
  return {
    props: {
      lineup,
      ...website,
    },
  };
};

export default Lineup;
