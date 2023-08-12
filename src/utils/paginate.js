export function paginate(mentors) {
  const itemsPerPage = 12;
  const pages = Math.ceil(mentors.length / itemsPerPage);
  console.log(pages); // 4

  // create array of arrays

  const newMentors = Array.from({ length: pages }, (_, index) => {
    console.log(index); // 0 1 2 3 бо довжина дорівнює 4 (pages)
    const start = index * itemsPerPage; // 0, 10, 20, 30 - провели 4 ітерації
    return mentors.slice(start, start + itemsPerPage); // стоврюєм 4 копії масивів куди даєм елементи(1 масив - елементи з індексами 0 по 9, 2 - з 10 до 19 і тд)
  });
  console.log(newMentors);
  return newMentors;
}
