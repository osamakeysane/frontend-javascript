// Task 6: Creating functions specific to employees

// Exported isDirector function
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Exported executeWork function
export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
