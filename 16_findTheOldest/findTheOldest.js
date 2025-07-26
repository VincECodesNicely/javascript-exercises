const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((old, current) => {
    const lastPerson = getAge(old.yearOfBirth, old.yearOfDeath);
    const currentPerson = getAge(current.yearOfBirth, current.yearOfDeath);
    return lastPerson < currentPerson ? current : old;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
