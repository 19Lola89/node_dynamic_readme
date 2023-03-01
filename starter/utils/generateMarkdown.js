// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ![GitHub](https://img.shields.io/github/license/19Lola89/node_dynamic_readme?color=blue&style=flat-square)
  

  ## Project Description

  ${data.description}

  ## Table of Contents

 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contribution](#contribution)
 * [Credit](#credit)
 * [License](#license)
 * [Test instruction](#test)

  ## Installation Instructions

  ${data.installation}


  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License
  
  This project is licensed under the terms of ${data.license} license. 

  ## Features of the project

  ${data.features}

  ## Test instructions

  ${data.test}

  ## Contributions

  ${data.contribution}

  ## Github profile URL

  ${data.gitHub}

[video walkthrough]()
  

`;
}

module.exports = generateMarkdown;
