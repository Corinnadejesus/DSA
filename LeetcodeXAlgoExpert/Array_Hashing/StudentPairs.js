/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

Input:
[
  ["58", "Linear Algebra"],
  ["17", "Software Design"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Output:
{
  [ '58', '17' ] => [ 'Linear Algebra', 'Software Design' ],
  [ '58', '94' ] => [ 'Economics' ],
  [ '58', '25' ] => [ 'Economics' ],
  [ '17', '94' ] => [],
  [ '17', '25' ] => [],
  [ '94', '25' ] => [ 'Economics' ]
}

Time: O(n) | Space: O(n)
*/

function findPairs(studentCoursePairs) {
  const result = new Map(); // {[student id pair], [courses]}
  let studentIds = new Set();

  function findSharedCourses(studentPair, studentCoursePairs) {
    const counts = {};
    const sharedCourses = [];

    // Updates course counts for the given student pair
    for (const [studentId, course] of studentCoursePairs) {
      if (studentId === studentPair[0] || studentId === studentPair[1]) {
        counts[course] = counts[course] ? counts[course] + 1 : 1;
      }
    }

    // Add courses that both students have
    for (const course in counts) {
      if (counts[course] === 2) {
        sharedCourses.push(course);
      }
    }

    return sharedCourses;
  }

  // 1. Get unique student ids using set
  for (const pair of studentCoursePairs) {
    studentIds.add(pair[0]);
  }
  //turns set into an array to iterate over
  studentIds = [...studentIds];

  // 2. For each student pair find shared courses and add to the result
  while (studentIds.length) {
    for (let j = 1; j < studentIds.length; j++) {
      const studentPair = [studentIds[0], studentIds[j]];
      const sharedCourses = findSharedCourses(studentPair, studentCoursePairs);
      result.set(studentPair, sharedCourses);
    }

    // All pairs have been created for the current student, remove them
    studentIds.splice(0, 1);
  }

  return result;
}
