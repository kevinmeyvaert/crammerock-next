import styled from 'styled-components';
import { device } from 'theme';

export const ContentGrid = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: dense;

  @media ${device.tablet} {
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const ContentGridItem = styled.article<{
  type: string;
  orange?: boolean;
  pattern?: boolean;
}>`
  position: relative;
  height: 100%;
  margin-bottom: 14px;

  background: ${(props) =>
    props.orange
      ? 'linear-gradient(-45deg, #F0986B, #a5d7dc)'
      : 'linear-gradient(-45deg, #a5d7dc, #2f4a5f)'};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  ${(props) =>
    props.pattern ?
    `
    background: url('/pattern.jpg');
    background-size: cover;
    animation: none;
    ` : undefined}

  @media ${device.tablet} {
    margin-bottom: 0;
    ${(props) => {
      if (props.type === 'a') {
        return `grid-column: span 4; grid-row: span 1.5;`;
      }
      if (props.type === 'b') {
        return `grid-column: span 4; grid-row: span 2;`;
      }
      if (props.type === 'c') {
        return `grid-column: span 2;`;
      }
      if (props.type === 'd') {
        return `grid-column: span 4;`;
      }
    }};
  }

  @media ${device.laptopL} {
    margin-bottom: 0;
    ${(props) => {
      if (props.type === 'a') {
        return `grid-column: span 6; grid-row: span 2;`;
      }
      if (props.type === 'b') {
        return `grid-column: span 4; grid-row: span 2;`;
      }
    }};
  }
`;
