// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = data.license !== "None" ? `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)` : "";

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is covered under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about this project, you can reach me at ${data.email}. You can also check out my GitHub profile at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
