// Question No 1 : For the given JSON iterate over all for loopa (for, for in, for of, forEach)

 //For in Loop
const students = {
  "info": [
    { "id": 1, "name": "John Doe", "age": 18 },
    { "id": 2, "name": "Jane Smith", "age": 17 },
  ]};

for (let i in students.info) {
  console.log("Id : "+students.info[i].id);
  console.log("Name : "+students.info[i].name);
  console.log("Age : "+students.info[i].age);
}

//=================================================================

//For of Loop
const students1 = {
  "info": [
    { "id": 1, "name": "John Doe", "age": 18 },
    { "id": 2, "name": "Jane Smith", "age": 17 },
  ]};

for (let i of students1.info) {
  console.log("Id : "+i.id);
  console.log("Name : "+i.name);
  console.log("Age : "+i.age);
}

//=================================================================

//For Each Loop
 const students2 = {
    "info": [
      { "id": 1, "name": "John Doe", "age": 18 },
      { "id": 2, "name": "Jane Smith", "age": 17 },
    ]};
  
    students2.info.forEach(function(info) {
    console.log("Id : "+info.id);
    console.log("Name : "+info.name);
    console.log("Age : "+info.age);
  });

  //================================================================

//For Loop
const students3 = {
  "info": [
    { "id": 1, "name": "John Doe", "age": 18 },
    { "id": 2, "name": "Jane Smith", "age": 17 },
  ]};

  for(var i=0;i<students3.info.length;i++) {
  console.log("Id : "+students3.info[i].id);
  console.log("Name : "+students3.info[i].name);
  console.log("Age : "+students3.info[i].age);
};

