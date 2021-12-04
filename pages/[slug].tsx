import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import HeaderNavigation from '@/components/HeaderNavigation';
import MainGrid from '@/components/MainGrid';
import MainNavigation from '@/components/MainNavigation';
import { WEBSITE } from '@/queries/dato/website';
import { PAGE } from '@/queries/dato/page';
import { PageQuery, WebsiteQuery } from '@/types/dato.types';

import { fetchDato } from '../lib/api';
import { ContentGrid, ContentPageWrapper } from '@/components/ContentGrid';
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardWrapper,
} from '@/components/homepage/HomeContent';
import { StructuredText } from 'react-datocms';
import { device, theme } from 'theme';
import MoreInfoCard from '@/components/MoreInfoCard';
import Footer from '@/components/Footer';

const InfoItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${theme.colors.secondary};

  & h3,
  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Page: FC<Props> = ({ activeEdition, mainNavigation, page }) => {
  const { content, children, parent } = page;
  console.log(page);
  return (
    <>
      <Head>
        <title>
          {page.title} - {activeEdition.title}
        </title>
      </Head>
      <MainGrid.Grid>
        <MainNavigation navigationItems={mainNavigation} activeEdition={activeEdition} />
        <HeaderNavigation activeEdition={activeEdition} />
        <MainGrid.Main>
          <ContentGrid>
            <ContentPageWrapper>
              {content && <h2>{page.title}</h2>}
              <StructuredText
                data={content}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case 'InfoItemRecord':
                      return (
                        <InfoItem>
                          <h3>{record.title}</h3>
                          <div dangerouslySetInnerHTML={{ __html: record.content }} />
                        </InfoItem>
                      );
                    default:
                      return null;
                  }
                }}
              />
            </ContentPageWrapper>
          </ContentGrid>
          {children.length > 0 ? (
            <ContentGrid>
              {children.map((child) => (
                <MoreInfoCard
                  href={`/${child.slug}`}
                  image={child.featuredImage}
                  title={child.title}
                  key={child.slug}
                />
              ))}
            </ContentGrid>
          ) : null}
          {parent?.children ? (
            <ContentGrid style={{ backgroundColor: theme.colors.primary }}>
              {parent.children
                .filter((child) => child.slug !== page.slug)
                .map((child) => (
                  <MoreInfoCard
                    href={`/${child.slug}`}
                    image={child.featuredImage}
                    title={child.title}
                    key={child.slug}
                  />
                ))}
            </ContentGrid>
          ) : null}
        </MainGrid.Main>
        <MainGrid.Footer />
      </MainGrid.Grid>
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ locale, query }: GetServerSidePropsContext) => {
  const { slug } = query;

  const { page } = await fetchDato<PageQuery>(PAGE, { variables: { locale, slug } });
  const { website } = await fetchDato<WebsiteQuery>(WEBSITE, { variables: { locale } });
  return {
    props: {
      ...website,
      page,
    },
  };
};

export default Page;
