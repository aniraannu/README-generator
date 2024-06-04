// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case "MIT":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "Academic":
          return "[![License: Academic](https://img.shields.io/badge/License-Academic-blue.svg)](https://opensource.org/licenses/Academic)";
      case "GNU":
          return "[![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)](https://opensource.org/licenses/GNU)";
      case "ISC":
          return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      case "Mozilla":
          return "[![License: Mozilla](https://img.shields.io/badge/License-Mozilla-orange.svg)](https://opensource.org/licenses/MPL-2.0)";
      case "Open":
          return "[![License: Open](https://img.shields.io/badge/License-Open-brightgreen.svg)](https://opensource.org/licenses/Open)";
      default:
          return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
    case 'Academic':
        return 'https://opensource.org/licenses/AFL-3.0';
    case 'GNU':
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'ISC':
        return 'https://opensource.org/licenses/ISC';
    case 'Mozilla':
        return 'https://www.mozilla.org/en-US/MPL/2.0/';
    case 'Open':
        return 'https://opensource.org/licenses/OSL-3.0';
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
      const licenseBadge = renderLicenseBadge(license);
      const licenseLink = renderLicenseLink(license);
      
      return `
## License

${licenseBadge}

This project is licensed under the [${license}](${licenseLink}) license.
`;
  } else {
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  renderLicenseSection();
  return `
  # ${answers.projectTitle}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This application is covered under the ${answers.license} license.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions or need further assistance, please feel free to reach out to me on [GitHub](https://github.com/${answers.username}) or via email at ${answers.email}.
    `;
}
module.exports = generateMarkdown;
