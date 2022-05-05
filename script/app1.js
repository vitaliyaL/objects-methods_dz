name = "Vita"; 
const user = {
  name: "Vitaliya",
  surname: "Laschenko",
  age: 21,
  pets: cat,
};
console.log(user);
user.car = "Renault";
user.child = 1;
console.log(user);
user.sayHiGlobal = function() {
    return(`Привет, ${name}!`);
  };
console.log(user);
console.log(user.sayHiGlobal());
user.sayHiLocal = function() {
  return(`Привет, ${this.name}!`);
};
console.log(user);
console.log(user.sayHiLocal());

function objProperty(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
objProperty(user);

function levels(obj) {
  flag = false;
  for (let i in obj) {
    typeof obj[i]==='object' ? flag = true:null;
      console.log(typeof obj[i]);
  }
  return flag;
}
console.log(levels(user)); 
