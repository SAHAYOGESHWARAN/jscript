const profile = {
    name: "saha",
    age: 20
};

const setProfile = function(name, age) {
    this.name = name;
    this.age = age;
};

let params = ['gokul', 30];
setProfile.apply(profile, params); 

console.log(profile); 

// Output
 //{ name: 'gokul', age: 30 }
