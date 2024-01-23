// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Import the Employee class
import Employee from "./Employee.js";

// Define the Intern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Call the constructor of the parent class (Employee) using super()
    super(name, id, email);
    // Add the specific property for Intern
    this.school = school;
  }

  // Add a method to get the school
  getSchool() {
    return this.school;
  }

  // Override the getRole method to return 'Intern'
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class
export default Intern;
