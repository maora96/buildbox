import bxlogo from "../../assets/bx-logo.png";
import bxlogo2x from "../../assets/bx-logo@2x.png";
import bxlogo3x from "../../assets/bx-logo@3x.png";
import styled from "styled-components";

export const AppHeader = styled.header`
  height: 90px;
  width: 100%;
  background: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BxLogo = styled.img`
  width: 103px;
  height: 45px;
  object-fit: contain;
`;

export default function Header() {
  return (
    <AppHeader>
      <BxLogo
        src={bxlogo}
        srcSet={`${bxlogo2x} 2x,
             ${bxlogo3x} 3x`}
      />
    </AppHeader>
  );
}
