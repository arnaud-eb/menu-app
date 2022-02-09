import * as React from "react";
import styled from "styled-components";

import { MenuType } from "./data";

type CatProps = {
  data: MenuType;
  filterMenus: (cat: string) => void;
};

const CategoriesContainer = styled.section`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

const FilterBtn = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: var(--clr-gold);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--radius);

  :hover {
    background: var(--clr-gold);
    color: var(--clr-white);
  }
`;

const Categories = ({ data, filterMenus }: CatProps) => {
  const categories = new Set<string>(data.map((menu) => menu.category));
  return (
    <CategoriesContainer>
      <FilterBtn
        onClick={() => {
          filterMenus("all");
        }}
      >
        all
      </FilterBtn>
      {Array.from(categories).map((cat, idx) => (
        <FilterBtn
          key={idx}
          onClick={() => {
            filterMenus(cat);
          }}
        >
          {cat}
        </FilterBtn>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
