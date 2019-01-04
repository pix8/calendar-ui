# Pogo App Stack

WIP

Boilerplate tooling for the development and maintenance of web sites and web apps alike. Data-driven single-page apps or conventional multi-page apps. It's really not fussy. Stack based on gulp + webpack(although neither are deeply coupled in this implementation), embellished with React and Vue, SASS and Pug for a (hopefully)unopinionated, untethered and 'freestyle' development workflow.

## Background
I built this stack for the robustness of my needs and as a middle finger to modern trends to dumb things down to the extent they become inflexible to use and people dare not question the status quo blissful in their ignorance - want react? run `create-react-app`, want vue? run `vue-cli`, want angular run `angular-cli`. Don't get me wrong. These are all brilliant, simple, easy and convenient boilerplates. I'm all for KISS and any goodness that can save me time but nevertheless the one-size fits all scenario simply isn't real-world and alas nor is it scalable(incidentally I did have Angular serviced in this stack at one point but removed it to negate the overhead of Typescript support - jury is still out on it's inclusion). Now you can argue that this is all stupid, needless and pointless. I'd agree. You would never ever want a cocktail of redundant libraries seeding a project however please bear with me, there is method to my madness. You see I'm a front-end developer, probably much like yourself, this means I am a proverbial Jack-of-all-trades. Worse still. I am a freelancer. This means I have to be flexible to my clients needs and align to the established technologies of their internal teams. Often I have to do this seamlessly whilst hitting the ground running with zero allowance for familiarisation or laying the ground work for new features. Also very often than not I encounter varying standards of practise. I use this tooling to level the playing field. It is my developer's Swiss Army Knife ;) ...Besides this rig also encourages a bit of playful experimentation and learning by not nailing you to a particular mode, framework, library or mantra. Enjoy and most of all go crazy.

## Getting Started

**Warning here be dragons: I've literally just thrown this up if anybody was interested or it proved useful. It's not been groomed for public consumptions and I do not really have any plans to support it other than getting it in a coherent and tidy condition and then maintaing it for my needs. I would advise that this is not for general release until this message is removed.**

Usual routine.

```sh
$ git clone git@github.com:pix8/pogo-app.git my-project
$ cd my-project
$ rm -rf .git
$ npm install
$ npm start
#$ git init
```

## Structure

* README.md
* .editorconfig
* .gitignore
* .circleci (*continuous integration)
* package.json
* Webpack(webpack.config)
	* Babel
		* ES6/React/Vue
		* HTML
			* Pug/JSX
		* CSS
			* PostCSS
			* SASS
		* SVG
		* Webfonts
		* Static resources: Bitmaps/text/audio/video
* Gulp(gulpfile.js)
	* HTML
		* Pug/JSX
	* CSS
		* PostCSS
			* SASS
	* SVG
	* Webfonts
	* Favicons
	* Static resources: Bitmaps/text/audio/video
* .babelrc
* .eslintrc
* .postcssrc
* (API server(server.api.js)\
Mock/Services (stage: data-driven hydration/simulation)\
API(working directory)) *Optional stage
* Development server(server.dev.js)\
Source (stage: development/maintenance)\
Src(working directory)\
`npm start`
* Test (stage: quality assurance/intregity)\
Test(working directory)\
`npm run test`
* Distribution (stage: release/deploy)\
Dist(working directory)\
`npm run deploy`
