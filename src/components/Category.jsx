import { useLocation } from "react-router-dom";
// add navigation to /mentors/categories/:category

// if index of clisked category === index of category make changes!

export default function Category({ category, isActive, index }) {
  function findActive() {
    if (location.pathname === "/application" && isActive === index) {
      return "categories__item-active";
    }

    if (location.pathname === "/create-live-class" && isActive === index) {
      return "categories__item-active";
    }

    return "categories__item";
  }
  const location = useLocation();
  return (
    <li
      className={
        findActive()
        /*  location.pathname === "/application" ||
        location.pathname === "/create-live-class" && isActive === index
          ? "categories__item-active"
          : "categories__item" */
      }
      key={category.id}
    >
      <p>{category.name}</p>
    </li>
  );
}
