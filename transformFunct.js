
// transform the keys of an object into upper case

const obj = {
  name: "Samuel",
  country: "Rwanda",
  age: 25
};
console.log(obj)

const upperCaseKeys = {};
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    upperCaseKeys[key.toUpperCase()] = obj[key];
  }
}

console.log(upperCaseKey);