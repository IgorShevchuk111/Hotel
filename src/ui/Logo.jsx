import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  height: 5rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <H1>Hotel</H1>
    </StyledLogo>
  );
}

export default Logo;
