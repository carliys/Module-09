// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license !== "None") {
    badge = "";
  }
  return badge;
}

function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "MIT":
      licenseLink = '[![licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)';
      break;
  }
  return licenseLink;
} 

/*function generateMarkdown(data) {
  let license = '';
  switch (data.license) {
    case 'none':
      license = 'None'
      break;
    case 'MIT License':
      license = '[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)'
      break;
}}; */


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Licence](#Licence)
5. [Test](#Test)
6. [Contributing](#Contributing)
7. [Questions](#Questions)


  # Description
  ${data.Description};

  # Installation
  ${data.Installation};

  # Usage
  ${data.Usage};

  # Licence
  ${data.License};

  # Test
  ${data.Test};

  # Contributing
  ${data.Contributing};

  # Questions
  ${data.Questions}`;

}; 

module.exports = generateMarkdown;
