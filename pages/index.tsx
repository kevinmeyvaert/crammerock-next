import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import HeaderNavigation from '@/components/HeaderNavigation';
import HomeContent from '@/components/homepage/HomeContent';
import MainGrid from '@/components/MainGrid';
import MainNavigation from '@/components/MainNavigation';
import { NEWS_OVERVIEW } from '@/queries/dato/news';
import { WEBSITE } from '@/queries/dato/website';
import { NewsQuery, WebsiteQuery } from '@/types/dato.types';

import { fetchDato } from '../lib/api';
import Footer from '@/components/Footer';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: FC<Props> = ({ activeEdition, mainNavigation, news }) => {
  return (
    <>
      <Head>
        <title>{activeEdition.title}</title>
      </Head>
      <MainGrid.Grid>
        <MainNavigation navigationItems={mainNavigation} activeEdition={activeEdition}/>
        <HeaderNavigation activeEdition={activeEdition} />
        <MainGrid.Main>
          <HomeContent news={news} blocks={activeEdition.homepageBlocks} />
        </MainGrid.Main>
        <MainGrid.Footer />
      </MainGrid.Grid>
      <Footer/>
    </>
  );
};

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  const { website } = await fetchDato<WebsiteQuery>(WEBSITE, { variables: { locale } });
  const { news } = await fetchDato<NewsQuery>(NEWS_OVERVIEW, {
    variables: { locale },
  });
  return {
    props: {
      news,
      ...website,
    },
  };
};

export default Home;
