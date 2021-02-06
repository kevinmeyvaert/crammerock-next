import styled from 'styled-components';
import { device } from 'theme';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px;
  grid-template-areas:
    'header'
    'menu'
    'main'
    'right'
    'footer';

  @media ${device.tablet} {
    grid-template-areas:
      'menu header header header header header'
      'menu main main main main main'
      'menu right right right right right'
      'menu footer footer footer footer footer';
  }

  @media ${device.laptop} {
    grid-template-rows: 100px minmax(1fr, fit-content(100%));
    grid-template-areas:
      'menu header header header header header header header'
      'menu main main main main main right right'
      'menu footer footer footer footer footer footer footer';
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Navigation = styled.nav`
  grid-area: menu;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Main = styled.main`
  grid-area: main;
  background-color: red;
`;

const MainFullWidth = styled(Main)`
  grid-column-end: -2;
  grid-row-end: 5;

  @media ${device.tablet} {
    grid-column-end: -1;
    grid-row-end: 4;
  }

  @media ${device.laptop} {
    grid-row-end: 3;
  }

  @media ${device.laptopL} {
    grid-column-end: -2;
    grid-column-start: 3;
  }
`;

const Right = styled.aside`
  grid-area: right;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const MainGrid = () => {
  return (
    <Grid>
      <Header>Header</Header>
      <Navigation>Menu</Navigation>
      <Main>Main</Main>
      <Right>Right</Right>
      <Footer>Footer</Footer>
    </Grid>
  );
};

MainGrid.Grid = Grid;
MainGrid.Header = Header;
MainGrid.Navigation = Navigation;
MainGrid.Main = Main;
MainGrid.MainFullWidth = MainFullWidth;
MainGrid.Right = Right;
MainGrid.Footer = Footer;

export default MainGrid;
