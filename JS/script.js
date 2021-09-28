/*function sing(song){
    console.log(song);
}

//const
const multiply =(a,b)=> a*b;
const curriedMultiply = (a)=> (b)=> a*b; 
const compose =(f,g) => (a) => f(g(a));


sing("Last name ever .... first name greatest!");

var list =["amir","karam","khalil","Moose","saeed"];
console.log(list[0]);*/

//advanced array**********************************

const array=[1,2,5,12];
const double =[];
//for each you can a lot of side effects********************
const newArray = array.forEach((num) => {
    double.push(num*2);
})

console.log('for each',double);

//in map you have to return a value************************
const mapArray =array.map((num)=>{
    return num*2;
})

console.log('map',mapArray);
console.log('main array',array);

//filter**************************************
const filterArray=array.filter(num=>{
    return num>5;
})
//const filterArray=array.filter(num=>num>5);

console.log('filtered array', filterArray);


//reduce***************************************
const reduceArray = array.reduce((accumulator,num)=>{
    return accumulator+num;
},5)

console.log('reduce',reduceArray);

//refrence type **********************************
var object1={value:10};
var object2=object1;
var object3={value:10};

//context ****************************************
/** this is prefer to the objects inside {} */
const object4={
    a:function(){
        console.log(this);
    }
}
//instanntiation**********************************
class Player{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    introduce()
    {
        console.log(`Hi I am ${this.name},I'm a ${this.type}`);
    }
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type);
    }
    play()
    {
        console.log(`Weeeee Im a ${this.type}`);
    }
}
const wizard1=new Wizard('moose','Dark Magic');

