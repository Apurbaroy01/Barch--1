const students = [
    { id: 1, name: "Alice", age: 20, marks: 85 },
    { id: 2, name: "Bob", age: 22, marks: 90 },
    { id: 3, name: "Charlie", age: 19, marks: 78 },
    { id: 4, name: "David", age: 21, marks: 20 },
    { id: 5, name: "T-shart", age: 20, marks: 88 }
];


// map
// const items = students.map(student => {
//     return student
// })
// console.log(items);


// filter
// const filter = students.filter(item=>{
//     return item.name === "David"
// })
// console.log(filter);



// const find = students.filter(student => {
//     return student.marks === 85
// })
// console.log(find)


// const blocked = students.filter(student => {
//     return student.id !== 2
// })
// console.log(blocked)

// const result = students.filter(student => {
//     return student.marks > 25
// })
// console.log(result)


// const result = students.filter(student => {
//     return student.name.includes("a")
// })
// console.log(result)

// const result = students.filter(student => {
//     return student.name.startsWith("A")
// })
// console.log(result)

const result = students.filter(student => {
    return student.name.endsWith("e")
})
console.log(result)




