import * as React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import Menu from "./Menu";

import data from "./data";

const AppWrapper = styled.main`
  padding: 5rem 0;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    top: 130%;
    right: calc(50% - 5rem / 2);
    width: 5rem;
    height: 0.25rem;
    background: var(--clr-gold);
  }
`;

const MenuContainer = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`;

function App() {
  const [menus, setMenus] = React.useState(data);

  const filterMenus = (cat: string) => {
    if (cat === "all") {
      setMenus(data);
    } else {
      setMenus(data.filter((menu) => menu.category === cat));
    }
  };
  return (
    <AppWrapper>
      <Title>
        <h2>our menu</h2>
      </Title>
      <Categories data={data} filterMenus={filterMenus} />
      <MenuContainer>
        {menus.map((menu) => (
          <Menu key={menu.id} {...menu} />
        ))}
      </MenuContainer>
    </AppWrapper>
  );
}

export default App;
