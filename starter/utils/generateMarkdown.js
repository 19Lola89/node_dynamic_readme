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
 * [Contribution](#contributions)
 * [Credit](#credits)
 * [License](#license)
 * [Test](#test)

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

[video walkthrough](#https://www.awesomescreenshot.com/video/15225116?key=25074b217abe6e94fd45511f9763960b)
  

`;
}

module.exports = generateMarkdown;
