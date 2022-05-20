function getAge(birthYear){
	var currentDate = new Date();
    //console.log(currentDate);
    var currentYear = currentDate.getFullYear();
    //console.log(currentYear);
    age = currentYear - birthYear;
    return age;
}getAge(1990);
console.log(age);