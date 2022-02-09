import styled from "styled-components";

import { MenuItemType } from "./data";

const MenuItemContainer = styled.article`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }
`;

const ItemImg = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid var(--clr-gold);
  border-radius: var(--radius);
  display: block;

  @media screen and (min-width: 768px) {
    height: 175px;
  }

  @media screen and (min-width: 1200px) {
    height: 150px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted var(--clr-grey-5);

  h4 {
    margin-bottom: 0.5rem;
  }

  h4:last-of-type {
    color: var(--clr-gold);
  }
`;

const ItemText = styled.p`
  margin-bottom: 0;
  padding-top: 1rem;
`;

function Menu({ title, price, img, desc }: MenuItemType) {
  return (
    <MenuItemContainer>
      <ItemImg src={img} alt={title} />
      <div>
        <Header>
          <h4>{title}</h4>
          <h4>${Math.floor(price)}</h4>
        </Header>
        <ItemText>{desc}</ItemText>
      </div>
    </MenuItemContainer>
  );
}

export default Menu;
