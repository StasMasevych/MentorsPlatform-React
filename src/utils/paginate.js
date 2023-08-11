export function paginate(mentors) {
  const itemsPerPage = 10;
  const pages = Math.ceil(mentors.length / itemsPerPage);

  const newMentors = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return mentors.slice(start, start + itemsPerPage);
  });
  console.log(newMentors);
  return newMentors;
}
