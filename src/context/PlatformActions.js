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

export function getAllMentors(allMentorsArray) {
  return allMentorsArray;
}

// get filtered by category array of mentors

export function getMentorsByCategory(mentorCategory, MentorsArray) {
  const filteredByCategoryArray = MentorsArray.filter(
    (mentor) => mentor.category === mentorCategory
  );
  return filteredByCategoryArray;
}

// get filtered by searchTerm

// default - from Upercase, if lovercase - makes to first letter upercase

// add later ability to find str irresective of SOFTSERVE / SOFTserve / SoFTseRV etc.

export function getSearchResults(searchInput, MentorsArray) {
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const searchTerm = capitalizeWords(searchInput);

  const filteredBySearchArray = MentorsArray.filter((mentor) => {
    if (searchTerm === mentor.name) {
      return mentor.name === searchTerm;
    }

    if (searchTerm === mentor.category) {
      return mentor.category === searchTerm;
    }

    if (searchTerm === mentor.company) {
      return mentor.company === searchTerm;
    }
  });
  return filteredBySearchArray;
}

// get single live class from array

export function getLiveClass(liveClassName, liveClassArray) {
  const findedLiveClassArray = liveClassArray.filter(
    (liveClass) => liveClass.name === liveClassName
  );
  const [liveClassObj] = findedLiveClassArray;

  return liveClassObj;
}
