var path = require('path');
const Time = require(path.join(__dirname, 'models', 'time.js'));

class DeveloperData {
    constructor(name) {
        this.name = name
    }
}
// console.log(path.join(__dirname, 'models', 'time.js'))
var all = Time.find({
    developer : "Alesik Ivan"
});
var user = new DeveloperData("Alesik Ivan")
console.log(all)
