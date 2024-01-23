// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Import the Employee class
import Employee from "./Employee.js";

// Define the Manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the parent class (Employee) using super()
    super(name, id, email);
    // Add the specific property for Manager
    this.officeNumber = officeNumber;
  }

  // Add a method to get the office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Override the getRole method to return 'Manager'
  getRole() {
    return 'Manager';
  }
}

// Export the Manager class
export default Manager;
