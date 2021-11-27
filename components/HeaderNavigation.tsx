import Link from 'next/link';
import { useRouter } from 'next/router';
import { Image } from 'react-datocms';
import styled from 'styled-components';
import { device } from 'theme';

import { EditionFragment } from '@/types/dato.types';

import MainGrid from './MainGrid';

const Header = styled(MainGrid.Header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 1rem;

  @media ${device.tablet} {
    overflow: initial;
  }
`;

const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  padding: 0 2rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const LocaleButton = styled.li<{ active: boolean }>`
  padding: 10px;
  margin-left: 10px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : props.theme.colors.base};
  font-size: 1.2rem;
  color: ${(props) => (props.active ? props.theme.colors.base : props.theme.colors.primary)};
`;

const Logo = styled.div`
  max-width: 200px;
  align-self: center;
  position: relative;

  @media ${device.tablet} {
    margin-top: 20px;
    max-width: 250px;
  }

  @media ${device.desktop} {
    max-width: 300px;
  }
`;

interface Props {
  activeEdition: EditionFragment;
}

const HeaderNavigation: React.FC<Props> = ({ activeEdition }) => {
  const { locales, pathname, locale } = useRouter();
  return (
    <Header>
      <HeaderNav>
        {/* <List>
          {locales.map((availableLocale) => (
            <LocaleButton key={availableLocale} active={availableLocale === locale}>
              <Link href={pathname} locale={availableLocale}>
                {availableLocale.toUpperCase()}
              </Link>
            </LocaleButton>
          ))}
        </List> */}
      </HeaderNav>
      <Logo>
        <Image data={activeEdition.logo.responsiveImage} style={{ zIndex: 10 }} lazyLoad={false} />
      </Logo>
    </Header>
  );
};

export default HeaderNavigation;
