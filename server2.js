const jsonString = '{"name": "john","age":30,"city":"newwirk"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
const jsonStringfy = JSON.stringify(jsonObject);
console.log(typeof(jsonStringfy));