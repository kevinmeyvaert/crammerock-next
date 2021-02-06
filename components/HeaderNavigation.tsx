import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import MainGrid from './MainGrid';

const Header = styled(MainGrid.Header)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 25px;
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
    props.active ? props.theme.colors.primary : props.theme.colors.base};
  font-size: 1.2rem;
  color: ${(props) => (props.active ? props.theme.colors.base : props.theme.colors.primary)};
`;

const HeaderNavigation = () => {
  const { locales, pathname, locale } = useRouter();
  return (
    <Header>
      <List>
        {locales.map((availableLocale) => (
          <LocaleButton key={availableLocale} active={availableLocale === locale}>
            <Link href={pathname} locale={availableLocale}>
              {availableLocale.toUpperCase()}
            </Link>
          </LocaleButton>
        ))}
      </List>
    </Header>
  );
};

export default HeaderNavigation;
