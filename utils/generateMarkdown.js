 // function to generate license badge for user selection
 function licenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ``;
  }
 }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data.license)}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the ${data.license} license. For more information, click on the license badge at the top of this file.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Get in touch with any questions about this project!

  GitHub: https://github.com/${data.github}

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
