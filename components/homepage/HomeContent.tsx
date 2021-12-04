import { format } from 'date-fns';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import styled from 'styled-components';
import { device } from 'theme';
import nl from 'date-fns/locale/nl';

import { ContentGrid, ContentGridItem } from '../ContentGrid';

export const CardWrapper = styled.div<{ type: string; hasLink?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  box-align: start;
  align-items: flex-start;
  overflow: hidden;

  cursor: ${(props) => (props.hasLink ? 'pointer' : 'initial')};

  ${(props) => {
    if (props.type === 'a') {
      return `padding-bottom: 66.6667%;`;
    }
    if (props.type === 'b') {
      return `padding-bottom: 100%`;
    }
    if (props.type === 'c') {
      return `padding-bottom: 100%;`;
    }
    if (props.type === 'd') {
      return `padding-bottom: 50%;`;
    }
  }};
`;

export const CardImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transition: 0.3s;
  width: 100%;
  height: 100%;

  ${CardWrapper}:hover & {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.header`
  position: absolute;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardIframe = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  background: ${(props) =>
    `linear-gradient(-45deg, ${props.theme.colors.secondary}, ${props.theme.colors.primary})`};
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.base};
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.6rem 0.8rem 0.4rem 0.8rem;
  margin: 0;
`;

export const NewsCardDate = styled.time`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.base};
  align-self: flex-end;
  margin: 1rem;
  padding: 0.5rem 1rem;
`;

interface CardProps {
  type: string;
  image?: ResponsiveImageType;
  orange?: boolean;
  children: ReactNode;
  link?: string;
  pattern?: boolean;
}

export const Card: FC<CardProps> = ({ type, orange, children, link, pattern }) => {
  if (!link) {
    return (
      <ContentGridItem type={type} orange={orange} pattern={pattern}>
        <CardWrapper type={type}>{children}</CardWrapper>
      </ContentGridItem>
    );
  }

  return (
    <Link href={link}>
      <ContentGridItem type={type} orange={orange}>
        <CardWrapper type={type} hasLink>
          {children}
        </CardWrapper>
      </ContentGridItem>
    </Link>
  );
};

const CardContent = ({ type, asset, iframeEmbedUrl, size }) => {
  if (type === 'ImageRecord') {
    const image = size === 'Small' ? asset.square : asset.long;
    return <CardImage data={image} />;
  }
  if (type === 'IframeRecord') {
    return <CardIframe src={iframeEmbedUrl} frameBorder="0" allow="encrypted-media"></CardIframe>;
  }
  return null;
};

const HomeContent = ({ news, blocks }) => {
  const cardConfig = [
    { type: 'a', imageSize: 'normal' },
    { type: 'b', imageSize: 'square' },
    { type: 'd', imageSize: 'long' },
  ];

  return (
    <ContentGrid>
      {news.slice(0, 3).map((item, index) => {
        return (
          <Card type={cardConfig[index].type} key={item.title} link={`/news/${item.slug}`} orange>
            {item.featuredImage[cardConfig[index].imageSize] && (
              <CardImage data={item.featuredImage[cardConfig[index].imageSize]} />
            )}
            <CardBody>
              <NewsCardDate dateTime={item._publishedAt}>
                {format(new Date(item._publishedAt), 'PPP', {
                  locale: nl,
                })}
              </NewsCardDate>
              <CardTitle>{item.title}</CardTitle>
            </CardBody>
          </Card>
        );
      })}
      {blocks.map((contentBlock, i) => {
        const hasPattern = ['IframeRecord'].includes(contentBlock.type);
        return (
          <Card
            type={contentBlock.size === 'Wide' ? 'd' : 'c'}
            orange={Number(i) % 2 == 0}
            pattern={hasPattern}
            key={contentBlock.id}
          >
            <CardContent {...contentBlock} />
          </Card>
        );
      })}
    </ContentGrid>
  );
};

export default HomeContent;
