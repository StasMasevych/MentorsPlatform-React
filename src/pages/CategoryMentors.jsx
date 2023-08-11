import { useParams } from "react-router-dom";

import { getMentorsByCategory } from "../context/PlatformActions";
import { allMentorsArray } from "../data/data-mentors/allMentorsArray";

export default function CategoryMentors() {
  const params = useParams();
  console.log(params);

  const newCategoryArray = getMentorsByCategory(
    params.category,
    allMentorsArray
  );
  console.log(newCategoryArray);

  return (
    <div>
      <p>{params.category}</p>
    </div>
  );
}
