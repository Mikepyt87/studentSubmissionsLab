// 1.
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};

// not interestd in addSubmissions return value.
// so I don't call it in a console log

addSubmission(submissions, "James", 100, "2022-10-05");
addSubmission(submissions, "Andrea", 60, "2022-10-05");

//console.log(submissions);

// 3.
const deleteSubmissonByIndex = (arrayOfSubmissions, indexToDeleteAt) => {
  arrayOfSubmissions.splice(indexToDeleteAt, 1);
};
// **TEST ---- 3.**
//deleteSubmissonByIndex(submissions, 2);
//console.log(submissions);

// 4.
const deleteSubmissonByName = (arrayOfSubmissions, nameToDelete) => {
  const foundIndex = arrayOfSubmissions.findIndex((student) => {
    return student.name === nameToDelete;
  });
  if (foundIndex !== -1) {
    arrayOfSubmissions.splice(foundIndex, 1);
  } else {
    console.log(`${nameToDelete} not found`);
  }
};
deleteSubmissonByName(submissions, "Jane");
// **TEST ---- 4
console.log(submissions);

// 5.
//No array method for #5
const editScore = (arrayOfSubmissions, index, score) => {
  if (submissions.score >= 60) {
    submissions.passed = true;
  }
};
console.log(submissions);
