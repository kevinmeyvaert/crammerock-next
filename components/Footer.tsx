import styled from 'styled-components';
import { device } from 'theme';

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  padding: 2rem;

  @media ${device.tablet} {
    padding: 4rem 5rem;
  }
`;

const Footer = () => {
  return <FooterWrapper>hey</FooterWrapper>;
};

export default Footer;
