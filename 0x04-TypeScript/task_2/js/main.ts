// Task 6: Creating functions specific to employees

// 1. Type predicate function to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// 2. Function to execute work depending on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
