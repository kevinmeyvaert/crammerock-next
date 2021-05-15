import { useMobileNavigation } from 'context/MobileNavigationContext';
import styled from 'styled-components';
import { device } from 'theme';

const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.open ? props.theme.colors.base : props.theme.colors.primary};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const Burger = () => {
  const { open, toggle } = useMobileNavigation();
  return (
    <StyledBurger open={open} onClick={toggle}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
