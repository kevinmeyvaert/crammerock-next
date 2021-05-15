import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'menu'
    'header'
    'main'
    'right'
    'footer';
`;

const Header = styled.header`
  grid-area: header;
`;

const Navigation = styled.nav`
  grid-area: menu;
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const MainGrid = () => {
  return (
    <Grid>
      <Navigation>Menu</Navigation>
      <Header>Header</Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Grid>
  );
};

MainGrid.Grid = Grid;
MainGrid.Header = Header;
MainGrid.Navigation = Navigation;
MainGrid.Main = Main;
MainGrid.Footer = Footer;

export default MainGrid;
