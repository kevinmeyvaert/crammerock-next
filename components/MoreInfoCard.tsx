import Link from 'next/link';
import styled from 'styled-components';
import { device, theme } from 'theme';
import { CardBody, CardImage, CardTitle, CardWrapper } from './homepage/HomeContent';

const MoreInfoItem = styled.article`
  position: relative;
  height: 100%;
  margin-bottom: 14px;
  background: ${theme.colors.primary};

  @media ${device.tablet} {
    margin-bottom: 0;
    grid-column: span 6;
  }

  @media ${device.laptop} {
    margin-bottom: 0;
    grid-column: span 3;
  }

  @media ${device.laptopL} {
    margin-bottom: 0;
  }
`;

const MoreInfoCard = ({ image, href, title }) => (
  <Link href={href}>
    <MoreInfoItem>
      <CardWrapper type="d" hasLink>
        <CardImage data={image?.thumbnail} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </CardWrapper>
    </MoreInfoItem>
  </Link>
);

export default MoreInfoCard;
