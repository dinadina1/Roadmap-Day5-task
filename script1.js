// Question No 2 : Create your own resume data in JSON format

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
    "Skill set":["Javascript","HTML","Css","C Programming"]
}
for(var key in resume){
console.log(key+" : "+resume[key]);
}