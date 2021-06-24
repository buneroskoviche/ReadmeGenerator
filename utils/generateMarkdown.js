const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnu2 = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
const gnu3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
const isc = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return mit;
    case "GNU GPLv2":
      return gnu2;
    case "GNU GPLv3":
      return gnu3;
    case "Apache 2.0":
      return apache;
    case "ISC":
      return isc;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU GPLv2":
      return "https://opensource.org/licenses/GPL-2.0";
    case "GNU GPLv3":
      return "https://opensource.org/licenses/GPL-3.0";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU GPLv2":
      return "https://opensource.org/licenses/GPL-2.0";
    case "GNU GPLv3":
      return "https://opensource.org/licenses/GPL-3.0";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

${renderLicenseBadge(data.license)}\n
${renderLicenseSection(data.license)}\n
${renderLicenseLink(data.license)}\n
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Have questions? Feel free to contacting me through my [GithHub profile](https://github.com/${data.github}) 
or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
