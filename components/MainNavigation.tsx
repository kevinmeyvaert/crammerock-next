import { useMobileNavigation } from 'context/MobileNavigationContext';
import { FC } from 'react';
import styled from 'styled-components';
import { device } from 'theme';

import { EditionFragment, ExternalLinkFragment, InternalLinkFragment } from '../types/dato.types';
import Burger from './Burger';
import MainGrid from './MainGrid';
import NavigationItem from './NavigationItem';

interface Props {
  navigationItems: Array<InternalLinkFragment | ExternalLinkFragment>;
  activeEdition: EditionFragment;
}

const Navigation = styled(MainGrid.Navigation)<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  align-items: ${(props) => (props.open ? 'center' : 'flex-end')};
  padding: 2rem 1rem;
  width: 100%;

  background-color: ${(props) => props.open ? props.theme.colors.primary : 'initial'};
  height: ${(props) => (props.open ? '100vh' : 'initial')};
  position: ${(props) => (props.open ? 'absolute' : 'initial')};
  z-index: ${(props) => (props.open ? '99' : 'initial')};
`;

const NavigationList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  padding: 0;
  margin: 0;

  @media ${device.laptop} {
    display: flex;
  }
`;

const NavigationListItem = styled.li`
  font-size: 1.6rem;
  font-family: 'Bebas Neue', sans-serif;
  color: ${(props) => props.theme.colors.primary};
`;

const MobileNavigationList = styled.ul`
  list-style: none;
  flex-direction: column;
  padding: 0;
`;

const MobileNavigationListItem = styled.li`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.base};
`;

const Date = styled.aside`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  padding: 0.5rem 0.7rem 0.5rem 0;

  position: absolute;
  left: 1rem;
  top: 2rem;
`;

const MainNavigation: FC<Props> = ({ navigationItems, activeEdition }) => {
  const { open } = useMobileNavigation();
  return (
    <Navigation open={open}>
      <Burger />
      {!open && <Date>
        {`${activeEdition.startDate.slice(-1)}-${activeEdition.endDate.slice(
          -1,
        )} September ${activeEdition.startDate.slice(0, 4)}, Stekene`}
      </Date>}
      <NavigationList>
        {navigationItems.map((navigationItem) => (
          <NavigationListItem key={navigationItem.label}>
            <NavigationItem item={navigationItem} />
          </NavigationListItem>
        ))}
      </NavigationList>
      {open && (
        <MobileNavigationList>
          {navigationItems.map((navigationItem) => (
            <MobileNavigationListItem key={navigationItem.label}>
              <NavigationItem item={navigationItem} />
            </MobileNavigationListItem>
          ))}
        </MobileNavigationList>
      )}
    </Navigation>
  );
};

export default MainNavigation;
