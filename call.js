const profile = {
    name: "saha",
    age: 20
};

const setProfile = function(name, age) {
    this.name = name;
    this.age = age;
};

const boundProfile = setProfile.bind(profile, 'gokul', 30);
boundProfile(); 

console.log(profile);



// Output: { name: 'gokul', age: 30 }
