import { useMobileNavigation } from 'context/MobileNavigationContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
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

  background-color: ${(props) => (props.open ? props.theme.colors.primary : 'initial')};
  height: ${(props) => (props.open ? '100vh' : 'initial')};
  position: ${(props) => (props.open ? 'absolute' : 'initial')};
  z-index: ${(props) => (props.open ? '99' : 'initial')};

  @media ${device.tablet} {
    padding: 2rem 2rem;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: row;
  padding: 0;
  margin: 0;

  @media ${device.laptop} {
    display: flex;
  }
`;

const NavigationListItem = styled.li`
  font-size: 1.6rem;
  font-family: 'Bebas Neue', sans-serif;
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const MobileNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const MobileNavigationListItem = styled.li`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Bebas Neue', sans-serif;
  color: ${(props) => props.theme.colors.base};
`;

const Date = styled.aside`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  padding: 0.5rem 0.7rem 0.5rem 0;

  position: absolute;
  left: 1rem;
  top: 2rem;

  @media ${device.tablet} {
    left: 2rem;
  }
`;

const MainNavigation: FC<Props> = ({ navigationItems, activeEdition }) => {
  const { open, toggle } = useMobileNavigation();
  const { pathname } = useRouter();

  useEffect(() => {
    if (open) {
      toggle();
    }
  }, [pathname]);

  return (
    <Navigation open={open}>
      <Burger />
      {!open && (
        <Date>
          {`${activeEdition.startDate.slice(-1)}-${activeEdition.endDate.slice(
            -1,
          )} September ${activeEdition.startDate.slice(0, 4)}, Stekene`}
        </Date>
      )}
      <NavigationList>
        <NavigationListItem>
          <Link href="/">Home</Link>
        </NavigationListItem>
        {navigationItems.map((navigationItem) => (
          <NavigationListItem key={navigationItem.label}>
            <NavigationItem item={navigationItem} />
          </NavigationListItem>
        ))}
      </NavigationList>
      {open && (
        <MobileNavigationList>
          <MobileNavigationListItem>
            <Link href="/">Home</Link>
          </MobileNavigationListItem>
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
