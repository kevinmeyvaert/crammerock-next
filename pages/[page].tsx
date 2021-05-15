import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import HeaderNavigation from '@/components/HeaderNavigation';
import MainGrid from '@/components/MainGrid';
import MainNavigation from '@/components/MainNavigation';
import { WEBSITE } from '@/queries/dato/website';
import { WebsiteQuery } from '@/types/dato.types';

import { fetchDato } from '../lib/api';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Page: FC<Props> = ({ activeEdition, mainNavigation }) => {
  return (
    <>
      <Head>
        <title>{activeEdition.title}</title>
      </Head>
      <MainGrid.Grid>
        <MainNavigation navigationItems={mainNavigation} activeEdition={activeEdition}/>
        <HeaderNavigation activeEdition={activeEdition} />
        <MainGrid.Main>
        </MainGrid.Main>
        <MainGrid.Footer />
      </MainGrid.Grid>
    </>
  );
};

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  const { website }: WebsiteQuery = await fetchDato(WEBSITE, { variables: { locale } });
  return {
    props: {
      ...website,
    },
  };
};

export default Page;
