import { categories } from "../data/data-categories/data-categories";
import Category from "./Category";
export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <ul className="categories__list">
          {categories.map((category) => {
            return <Category key={category.id} category={category} />;
          })}
        </ul>
      </div>
    </div>
  );
}
