employees:[]

function Employee (name, title, salary, status = "Full Time"){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
} 

Employee.prototype.printEmployeeForm = function (){
    console.log("Name: " + this.name);
    console.log("Tile: " + this.title);
    console.log("Salary: " + this.salary);
    console.log("Status: " + this.status);
    console.log("--------------")
}

var firstPerson = new Employee("Bob", "Assassin", 500, "Part Time")
firstPerson.printEmployeeForm();

var secondPerson = new Employee("Bill", "Assassin", 500,)
secondPerson.printEmployeeForm();

var thirdPerson = new Employee("Brad", "Assassin", 500, "Contract")
thirdPerson.printEmployeeForm();

