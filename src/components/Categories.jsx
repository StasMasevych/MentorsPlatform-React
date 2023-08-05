import { categories } from "../data/data-categories/data-categories";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <ul className="categories__list">
          {categories.map((category) => {
            return (
              <a className="categories__item" href="link">
                <li key={category.id}>
                  <p>{category.name}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
