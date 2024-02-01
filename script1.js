// Question No 2 : For the above JSON, iterate over all for loops (for, for in, for of, forEach)

 //For in Loop
 
 let resume = {
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
  for (let data in resume) {
    console.log(`${data} : ${resume[data]}`);
  }
  
  /*
Result : 
-------
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

  //=================================================================
  
  //For of Loop

  let resume1=[
    {"Name":"Dinakaran"},
    {"Qualification":"BCA"},
    {"Passedout Year":"2022"},
    {"Father Name":"Muthu"},
    {"Mother Name":"Meena"},
    {"Age":"22"},
    {"Date of Birth":"15-11-2002"},
    {"Place":"Chennai"},
    {"Occupation":"Student"},
    {"CGPA":"8.5"},
    {"Skill set":["Javascript","HTML","CSS","C Programming"]},
    {"Passion":"Web development"}
]
for (data of resume1) {
    for(obj in data){
        console.log(`${obj} : ${data[obj]}`);
    }
}

  /*
Result : 
-------
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
  
  //=================================================================
  
  //For Each Loop

  let resume2 = [{
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
}]
resume2.forEach(element => {
    for(data in element){
        console.log(`${data} : ${element[data]}`);
    }
});

/*
Result : 
-------
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
  
    //================================================================
  
  //For Loop

  let resume3 = [{
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
}]

for(let i=0;i<resume3.length;i++){
    for(data in resume3[i]){
        console.log(`${data} : ${resume3[i][data]}`);
    }
}

/*
Result : 
-------
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