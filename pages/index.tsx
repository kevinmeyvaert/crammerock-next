import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import MainNavigation from '../components/MainNavigation';
import { fetchDato } from '../lib/api';
import { WEBSITE } from '../queries/dato/website';
import styles from '../styles/Home.module.css';
import { WebsiteQuery } from '../types/dato.types';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: FC<Props> = ({ activeEdition, mainNavigation }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{activeEdition.title}</title>
      </Head>
      <MainNavigation navigationItems={mainNavigation} />
      <main className={styles.main}>
        <h1 className={styles.title}>{activeEdition.title}</h1>
      </main>
    </div>
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

export default Home;
