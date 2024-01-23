// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Import the Employee class
import Employee from "./Employee.js";

// Define the Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call the constructor of the parent class (Employee) using super()
    super(name, id, email);
    // Add the specific property for Engineer
    this.github = github;
  }

  // Add a method to get the GitHub username
  getGithub() {
    return this.github;
  }

  // Override the getRole method to return 'Engineer'
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class
export default Engineer;
