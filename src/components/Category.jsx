// add navigation to /mentors/categories/:category

export default function Category({ category }) {
  return (
    <li className="categories__item" key={category.id}>
      <p>{category.name}</p>
    </li>
  );
}
