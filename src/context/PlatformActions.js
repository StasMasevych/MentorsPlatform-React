// get clicked/loaded (page) mentor object from array

export function getMentor(mentorName, mentorsArray) {
  console.log("Hi from getMentor function!", mentorName, mentorsArray);

  const findedMentorArray = mentorsArray.filter(
    (mentor) => mentor.name === mentorName
  );
  const [mentorObj] = findedMentorArray;

  return mentorObj;
}

// get clicked all mentors array

export function getAllMentors(allMentorsArray) {}

// get filtered by category array of mentors

export function getMentorsByCategory(mentorCategory, allMentorsArray) {
  const filteredByCategoryArray = allMentorsArray.filter(
    (mentor) => mentor.category === mentorCategory
  );
  return filteredByCategoryArray;
}
