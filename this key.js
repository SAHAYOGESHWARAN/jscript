const profile ={
    name:"saha",
    children:[
        {
            name:"gokul",
            getName(){
                return this.name;
            }
        }
    ],
    getName(){
        return this.name;

    }
};

//console.log(profile.getName());
console.log(profile.children[0].getName());


//output 
//gokul