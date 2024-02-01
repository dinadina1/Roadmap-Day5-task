// Question No 1 : Create your own resume data in JSON format

const resume = {
  "Name":"Dinakaran",
  "Qualification":"BCA",
  "Passedout Year":"2022",
  "Father Name":"Muthu",
  "Mother Name":"Meena",
  "Age":"22",
  "Date of Birth":"15-11-2002",
  "Place":"Chennai",
  "Occupation":"Student",
  "CGPA":"8.5",
  "Skill set":["Javascript","HTML","CSS","C Programming"],
  "Passion":"Web development"
}

for(var data in resume){
console.log(`${data} : ${resume[data]}`);
}

/*
Result : 
Name : Dinakaran
Qualification : BCA
Passedout Year : 2022
Father Name : Muthu
Mother Name : Meena
Age : 22
Date of Birth : 15-11-2002
Place : Chennai
Occupation : Student
CGPA : 8.5
Skill set : Javascript,HTML,CSS,C Programming
Passion : Web development
*/