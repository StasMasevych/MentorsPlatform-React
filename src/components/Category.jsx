import { useLocation } from "react-router-dom";
// add navigation to /mentors/categories/:category

// if index of clisked category === index of category make changes!

export default function Category({ category, isActive, index }) {
  const location = useLocation();
  return (
    <li
      className={
        location.pathname === "/application" && isActive === index
          ? "categories__item-active"
          : "categories__item"
      }
      key={category.id}
    >
      <p>{category.name}</p>
    </li>
  );
}
