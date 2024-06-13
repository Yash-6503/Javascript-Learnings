//Making use of object elements in examples

let course = {
    coursename: "Web Development",
    price: "5000",
    institutename: "DevInfo Technologies",
    phone: 9067973585,
    location: "Nashik",
    zipcode: 422003
};

console.log(course);

let CourseInfo = `Course name is ${course.coursename}. Course price is ${course.price} and Institute name is ${course.institutename} in ${course.location}.`;

console.log(CourseInfo);

const { coursename: name } = course;
const { price } = course;
const { institutename: institute } = course;
const { location } = course;
const { phone } = course;

let CourseDetails = `Course name is ${name}.\n Course price is ${price} and Institute name is ${institute} in ${location}.`;

console.log("\n", CourseDetails);

let Details = `
    \nCourse name = ${name}
    \nPrice = ${price}
    \nInstitute = ${institute}
    \nLocation = ${location}
`
console.log("\n", Details);