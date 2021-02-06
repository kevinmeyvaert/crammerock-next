import { FC } from 'react';
import { Image } from 'react-datocms';
import styled from 'styled-components';
import { device } from 'theme';

import { EditionFragment, ExternalLinkFragment, InternalLinkFragment } from '../types/dato.types';
import MainGrid from './MainGrid';
import NavigationItem from './NavigationItem';

interface Props {
  navigationItems: Array<InternalLinkFragment | ExternalLinkFragment>;
  activeEdition: EditionFragment;
}

const Navigation = styled(MainGrid.Navigation)`
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  max-width: 200px;

  @media ${device.tablet} {
    margin-top: 20px;
    max-width: 250px;
  }

  @media ${device.desktop} {
    max-width: 300px;
  }
`;

const NavigationList = styled.ul`
  padding: 20px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavigationListItem = styled.li`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.base};
`;

const MainNavigation: FC<Props> = ({ navigationItems, activeEdition }) => {
  return (
    <Navigation>
      <Logo>
        <Image data={activeEdition.logo.responsiveImage} />
      </Logo>
      <NavigationList>
        {navigationItems.map((navigationItem) => (
          <NavigationListItem key={navigationItem.label}>
            <NavigationItem item={navigationItem} />
          </NavigationListItem>
        ))}
      </NavigationList>
    </Navigation>
  );
};

export default MainNavigation;
