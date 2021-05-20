//Student last names are listed alphabetically. The code for this is below the STUDENTS array.
export const STUDENTS = [
    {
        id: 0,
        lastName: "Anderson",
        firstName: "Mary",
        attendance: " ",
    },
    {
        id: 1,
        lastName: "Brakerman",
        firstName: "Deandra",
        attendance: " ",
    },
    {
        id: 2,
        lastName: "Diaz",
        firstName: "Manuel",
        attendance: " ",
    },
    {
        id: 3,
        lastName: "Lee",
        firstName: "Daniel",
        attendance: " ",
    },
    {
        id: 4,
        lastName: "Villard",
        firstName: "Quentin",
        attendance: " ",
    },
    {
        id: 5,
        lastName: "Holbrook",
        firstName: "Mayola",
        attendance: " ",
    },
    {
        id: 6,
        lastName: "Siegel",
        firstName: "Christel",
        attendance: " ",
    },
    {
        id: 7,
        lastName: "Borrego",
        firstName: "Joseph",
        attendance: " ",
    },
    {
        id: 8,
        lastName: "Osteen",
        firstName: "Lissette",
        attendance: " ",
    },
    {
        id: 9,
        lastName: "Gillette",
        firstName: "Hillary",
        attendance: " ",
    },
    {
        id: 10,
        lastName: "Noble",
        firstName: "Matteo",
        attendance: " ",
    },
    {
        id: 11,
        lastName: "Fortune",
        firstName: "Samuel",
        attendance: " ",
    },
    {
        id: 12,
        lastName: "Elston",
        firstName: "Laurene",
        attendance: " ",
    },
    {
        id: 13,
        lastName: "McNulty",
        firstName: "Ahmed",
        attendance: " ",
    },
    {
        id: 14,
        lastName: "Ramsey",
        firstName: "Narcisca",
        attendance: " ",
    },
    {
        id: 15,
        lastName: "Crouch",
        firstName: "Grant",
        attendance: " ",
    },
    {
        id: 16,
        lastName: "Neil",
        firstName: "Vanita",
        attendance: " ",
    },
    {
        id: 17,
        lastName: "Schiller",
        firstName: "Enoch",
        attendance: " ",
    },
    {
        id: 18,
        lastName: "Lenz",
        firstName: "Shawanna",
        attendance: " ",
    },
    {
        id: 19,
        lastName: "Richardson",
        firstName: "Ulysses",
        attendance: " ",
    },
    {
        id: 20,
        lastName: "Davis",
        firstName: "Easton",
        attendance: " ",
    },
    {
        id: 21,
        lastName: "Drinkwater",
        firstName: "Atticus",
        attendance: " ",
    },
    {
        id: 22,
        lastName: "Carlyle",
        firstName: "Claude",
        attendance: " ",
    },
    {
        id: 23,
        lastName: "Ginty",
        firstName: "Elidia",
        attendance: " ",
    },
    {
        id: 24,
        lastName: "Brent",
        firstName: "Marcelo",
        attendance: " ",
    },
    {
        id: 25,
        lastName: "Peston",
        firstName: "Brock",
        attendance: " ",
    },
    {
        id: 26,
        lastName: "Zane",
        firstName: "Ash",
        attendance: " ",
    },
    {
        id: 27,
        lastName: "Delacruz",
        firstName: "Silas",
        attendance: " ",
    },
    {
        id: 28,
        lastName: "Hoyle",
        firstName: "Olivia",
        attendance: " ",
    },
    {
        id: 29,
        lastName: "Townes",
        firstName: "Hiram",
        attendance: " ",
    },
    {
        id: 30,
        lastName: "Nielsen",
        firstName: "Aleksey",
        attendance: " ",
    },
    {
        id: 31,
        lastName: "Grimm",
        firstName: "Nicholas",
        attendance: " ",
    },
    {
        id: 32,
        lastName: "Couture",
        firstName: "Nisha",
        attendance: " ",
    },
];

//Sorting the students' last name alphabetically. Used localeCompare() method: https://www.techonthenet.com/js/string_localecompare.php 
export const StudentsAlphabetical= STUDENTS.sort((lastName1,lastName2) => lastName1.lastName.localeCompare(lastName2.lastName, "en", {"sensitivity":"variant"}));
export default StudentsAlphabetical;
//export default STUDENTS;