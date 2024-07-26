const profile ={
    name:"saha",
    age:20

};

const setName = function(name,age){
    this.name = name;
};

setName.call(profile,'gokul')