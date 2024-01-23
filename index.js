
// import path from 'path';
import fs from 'fs';
import pathModule from 'path';
const currentFileUrl = new URL(import.meta.url);
const currentDir = pathModule.dirname(currentFileUrl.pathname);
const OUTPUT_DIR = pathModule.resolve(currentDir, 'output');
const outputPath = pathModule.join(OUTPUT_DIR, 'team.html');
import render from './src/page-template.js';
import inquirer from 'inquirer';

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

async function promptManager() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the manager's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the manager's email:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the manager's office number:",
    },
  ]);

  const Manager = (await import('./lib/Manager.js')).default;
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  teamMembers.push(manager);
  promptUser();
}

async function promptEngineer() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the engineer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the engineer's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the engineer's email:",
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the engineer's GitHub username:",
    },
  ]);

  const Engineer = (await import('./lib/Engineer.js')).default;
  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );
  teamMembers.push(engineer);
  promptUser();
}

async function promptIntern() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the intern's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the intern's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the intern's email:",
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter the intern's school:",
    },
  ]);

  const Intern = (await import('./lib/Intern.js')).default;
  const intern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );
  teamMembers.push(intern);
  promptUser();
}

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do next?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
    },
  ]);

  switch (answers.action) {
    case 'Add an engineer':
      await promptEngineer();
      break;
    case 'Add an intern':
      await promptIntern();
      break;
    case 'Finish building the team':
      generateHTML();
      break;
  }
}

function generateHTML() {
  const htmlContent = render(teamMembers);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, htmlContent);
  console.log(`HTML file has been generated at ${outputPath}`);
}

// Start the application by prompting for manager details
promptManager();
