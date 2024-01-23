// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    // Method to get the name
    getName() {
      return this.name;
    }
  
    // Method to get the ID
    getId() {
      return this.id;
    }
  
    // Method to get the email
    getEmail() {
      return this.email;
    }
  
    // Method to get the role (common to all employees)
    getRole() {
      return 'Employee';
    }
  }
  
  // Export the Employee class
  export default Employee;