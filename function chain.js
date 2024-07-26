const counter = () => {
    let i = 0;

    return {
        add(val) {
            i += val;
            return this; 
        },
        subtract(val) {
            i -= val;
            return this; 
        },
        print() {
            console.log(i);
            return this; 
        }
    };
};

const outerCounter = counter();

outerCounter
.add(2)
.add(2)
.add(2)
.add(2)
.subtract(1)
.print(); 



// Output: 7
