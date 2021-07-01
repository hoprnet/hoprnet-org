<!-- INTRODUCTION -->
<p align="center">
  <a href="https://hoprnet.org" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://github.com/hoprnet/hopr-assets/blob/master/v1/logo/hopr_logo_padded.png?raw=true" alt="HOPR Logo">
  </a>
  
  <!-- Title Placeholder -->
  <h3 align="center">HOPR Website</h3>
  <p align="center">
    <code>The website for the HOPR project and the HOPR Association</code>
  </p>
  <p align="center">
    HOPR is a privacy-preserving messaging protocol which enables the creation of a secure communication network via relay nodes powered by economic incentives using digital tokens.
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod" alt="Gitpod">
  </p>
</p>

## Introduction

The following repository hosts the code for the HOPR Protocol and HOPR Association [website](https://hoprnet.org). If you find any issues with the
website, please submit it as an [issue](https://github.com/hoprnet/hoprnet-org/issues) in this repository.

## Development

### Requirements

- `nodejs@14`
- `yarn`

### Instructions

To run the website, please go to the `service` folder, and run `yarn` to install all the dependencies. `yarn dev` will start the application and
expose the site on port `3000` by default.

### Contributing

1. To contribute to the project, first make sure there's an [issue](https://github.com/hoprnet/hoprnet-org/issues) related to the contribution you are looking to make.

2. We use [semantic convention](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for describing commits and branches. After identifying the issue by the number, create a branch in the form `$type/$issueId-$authorInitials-$description`, where

    2.1 `$type` can be any of `feat|bug|fix|docs|style|refactor|test|chore`

    2.2 `$issueId` relates to the issue is trying to solve.

    2.3 `$authorInitials` identifies who created the PR.

    2.4 `$description` is a two word description of the issue at hand.

    e.g. docs/100-JA-adding-guidelines

3. Commits follow also semantic convention, and should be phrased in the form `$type: Fixes #$issueId - $reason`, where

    3.1 `$type` can be any of `feat|bug|fix|docs|style|refactor|test|chore`

    3.2 `$issueId` relates to the issue is trying to solve.

    3.3 `$reason` is a few words about the “why” of this particular commit.

    e.g. "docs: Fixes #100 - Avoiding repeating instructions on how to contribute to project'

4. All our work is send as Pull Request (PR) to `development`, and has to be approved by another team member. Production is on `main`, and requires at least `two` team members approval.

## Translations
All the text content in the site are in translation labels. So, if you want to change any text you must find the correct label and replace it in the json files of required languages. These files are located in locales dir. Locales dir have the next dir structure where each dir is a language:

```bash
├── de
├── dev
├── en
├── es
├── ja
├── ko
├── pt
├── ru
├── tr
└── zh
```

Also the dir 'dev' contains the json files for the default labels.

Example
Changing text:

 `Whether it’s individuals, companies or institutions – the HOPR protocol provides full control over privacy, data and metadata. HOPR lays the groundwork for a more sovereign and safe internet. For everyone.`

That is allocated in homepage you must find the label in code. For this case the label is inside Welcome component `t('home:welcome.subTitle')`. All labels follows the structure `file_name:section:label`. Thus, the label would be in home.json file inside the 'welcome' section.

There is a look that line in the file:    

    "subTitle": "Whether it’s individuals, companies or institutions – the HOPR ...", 

In the next table you can find the labels orgzanization by page and file.

| Page/Section | Page location               | Translation file location | Namespace |
|--------------|-----------------------------|---------------------------|-----------|
| Home         | pages/index.js              | home.json                 | home:     |
| About Us     | pages/about-us/index.js     | about.json                | about:    |
| Technology   | pages/technology/index.js   | tech.json                 | tech:     |
| Token        | pages/token/index.js        | home.json                 | home:     |
| Junfrau      | pages/jungfrau/index.js     | junggrau.json             | jungfrau: |
| Blog         | pages/blog/index.js         | blog.json                 | blog:     |
| Common       | Common labels between pages | common.json               | common:   |
<!-- CONTACT -->

## Contact

- Twitter - https://twitter.com/hoprnet
- Telegram - https://t.me/hoprnet
- Medium - https://medium.com/hoprnet
- Reddit - https://www.reddit.com/r/HOPR/
- Email - contact@hoprnet.org
- Discord - https://discord.gg/5FWSfq7
- Youtube - https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA