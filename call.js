const profile ={
    name:"saha",
    age:20

};

const setProfile = function(name,age){
    this.name = name;
    this.age = age;
};

setProfile.call(profile,'gokul',30);
console.log(profile);

//output
//{ name: 'gokul', age: 30 }
