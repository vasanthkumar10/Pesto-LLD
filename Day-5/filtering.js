const users = [
  {
    name: "vasanth",
    role: "teacher",
    place: "chennai",
  },
  {
    name: "teachering",
    role: "engineer",
    place: "bengal",
  },
  {
    name: "ben",
    role: "doctor",
    place: "noida",
  },
  {
    name: "ashok",
    role: "engineer",
    place: "kashmir",
  },
  {
    name: "madhura",
    role: "manager",
    place: "mumbai",
  },
];

const filterByRole = ["engineer", "doctor"];
const filterByPlace = ["noida"];
const filteredUsers = users
  .filter((user) => filterByRole.includes(user.role))
  .filter((user) => filterByPlace.includes(user.place));
console.log(filteredUsers);
