import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import { fetchDato } from '../lib/api';
import { WEBSITE } from '../queries/dato/website';
import styles from '../styles/Home.module.css';
import { WebsiteQuery } from '../types/dato.types';

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ activeEdition }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{activeEdition.title}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{activeEdition.title}</h1>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { website }: WebsiteQuery = await fetchDato(WEBSITE);
  return {
    props: {
      ...website,
    },
  };
};

export default Home;