export function getMentor(mentorName, mentorsArray) {
  console.log("Hi from getMentor function!", mentorName, mentorsArray);

  const findedMentorArray = mentorsArray.filter(
    (mentor) => mentor.name === mentorName
  );
  const [mentorObj] = findedMentorArray;

  return mentorObj;
}
