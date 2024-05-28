// Employee Mangement System
 import inquirer from "inquirer";

 interface Employee  {
    name: string;
    id: number;
    salary: number;
  };

  const employees: Employee[] = [];

  const addEmployee = async () => {
    const { name, id, salary } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter employee name:",
      },
      {
        type: "number",
        name: "id",
        message: "Enter employee ID:",
      },
      {
        type: "number",
        name: "salary",
        message: "Enter employee salary:",
      },
    ]);
    employees.push({ name, id, salary });
    console.log("Employee added successfully!");
  };
  addEmployee();

