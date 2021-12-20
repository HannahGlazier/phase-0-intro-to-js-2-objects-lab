// Write your solution in this file!
const employee = {
    name: "Barb",
    streetAddress:"123 W Pine Ave",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployee = Object.assign({}, employee)
    delete deletedEmployee[key];
    return deletedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};