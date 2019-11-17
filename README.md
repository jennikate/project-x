# Project 2: APIs and React

## Overview
A simple website utilising [The CocktailDB API](https://www.thecocktaildb.com/api.php) to allow you to browse or search for cocktails. For my project I am using the development version of the API so the data available is not always the full set.

This was my second project with General Assembly's Software Engineering Immersive. An individual project built over a weekend, it focused on practicing utilising APIs and React.

[Take a look on GitHub Pages.](https://jennikate.github.io/project-x/)

[Check out the GitHub Repo here.](https://github.com/jennikate/project-x/tree/github-pages)

![image of Cocktails logo](https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/hero.png?raw=true)


## Brief

- Create a react app that talks to an API and displays some data
- Use any API you like
- Use some new libraries in your creation
- Make it look awesome 
- When you're done merge it to your github pages branch


## Technologies Used

- React
- Sass
- JavaScript (ES6)
- GitHub Pages
- Google Fonts & FontAwesome
- Webpack

**Libraries investigated: **
- [React Styled Components](https://www.robinwieruch.de/react-styled-components) for adding css styles in the js : added this when I was testing creating dynamic background-images based on data being called from the API, however I ultimately decided not to use background images
- [React Lazy Hero](http://react-lazy-hero.danielstefanovic.com/) for nice hero image loading and effects (which also requires styled components!)
- [React Router](https://reacttraining.com/react-router/) for better navigation and URLs. While I made this work when my navigation was hard coded, once I switched to dynamic elements I broke the routing and have not yet learnt the fix!

## Approach Taken
### Setting the Boundries

We had only one weekend to work on this project and I wanted to challenge myself without going too far. I developed a list of tasks, and identified what was enough to meet the brief, then what I might do as extras.

### Tasks
[x] select an API : I chose one that was freely available with included images and information that lent itself to a simple website
[x] create a React app that can fetch at least one data set and return it to the screen
[x] style the app using Bulma as a base and Sass to extend that
[x] include React Lazy Hero as an additional React library
[x] include FontAwesome as a style extension library

The above met the brief. The next tasks on the list were:
[x] adding more data sets
[x] dynamically populating <main> with the result of those data sets, using appropriate styling
[x] improving the navigation bar to indicate where you were
[x] adding search (as there was an API call for searching ingredients)
[] use React Router
[x] improve styles for mobile
[] make mobile menu autoclose on selection
[] handle searches that return no results
[] improve styling on category pages so the 'chalkboards' are sized based on content rather than on flexbox

### Functionality

The page is simple, a search, a random selection, or a menu system to ultimately see a cocktail with a short description.

Behind the scenes the most work was done on collecting data from the API and returning it in logical ways.

The API provided specific lists based on your parameter - e.g. only search results for an ingredient, only cocktails by their first letter, only cocktails for a specific category.

Due to this I realised I would need to make multiple API calls to obtain the data for each section and decided to make those calls on demand.
This resulted in repetition of code where the only differences were in the parameter on the API call, and the title for the page.

I originally built each call as a seperate function, but determined I could have one function and pass in parameters via datasets from the html, thus reducing the code to be a switch that updated the state, and fetched the API.

A second switch enabled me to swap the content of <main> out dynamically after the API data was obtained.



#### Featured Code

##### Featured piece of code 1: Fetching API data. 

Below is the switch function for fetching the API data. I have ideas on reducing this down to a single fetch statement with the relevant states called, however did not have time to refactor the states/datastorage to cater to all scenarios.

<img src="https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/code-example-1.png?raw=true" width=45%> 
#### Featured piece of code 2: Rendering the page

Below is the main render statement that contains the page structure.

In the <main> section I use a named state to determine which component to load, this is based on what the user clicked, ensuring the API call matches the component that is called.

The Nav takes a few parameters to call functions, all of which are set to bind 'this' to the component for when the functions are run.
In this app the Nav does the heavy lifting of calling all the needed functions and passing the params to them to call the right data and components.

<img src="https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/code-example-2.png?raw=true" width=45%>





### Screenshots

<img src="https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/Screenshot-1.png?raw=true" width=45%> <img src="https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/Screenshot-2.png?raw=true" width=45%>
<img src="https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/Screenshot-3.png?raw=true" width=45%> <img src="https://github.com/jennikate/project-x/blob/github-pages/src/images/for-readme/Screenshot-4.png?raw=true" width=45%>


### Bugs
If you find any bugs please let me know! jennikate @ gmail.com

Occasionally the API is slow to load and it looks like it's broken, but it's not.

If a search returns nothing you will often get a blank black box rather than nothing or an error message.

### Wins and Blockers

The two biggest wins for me were

This was my first proper React app, and that in itself is a big win. During development, I feel a couple of specific areas were great for learning and improving my programming and styling skills.

1. Finding patterns in the fetch statements and discovering ways to reduce the code needed for it. I believe it can be reduced further if I have more time
2. Some of the css. Although it's repetetive, learning how to style the picture frames/chalkboards, and then animating some was a success.



### Future Content
I want to go back over the code and make it accessible, as well as fix the mobile nav so it closes when a nav item is clicked.

There are also a few other items I would like to explore, such as 

** Using React Router **
My open question for this is, with the way I've set up the call API and show page on demand, how would you attach router to it

** Using Lodash **
I know this is a popular framework and it looks really interesting, I would like to try it out on my mapping initially.

** Improving the onClick handling **
If you look at my current code you will find a lot of repetition of onClick and the associated data-*. I need to learn how to force child elements to have the same parameters as the parent when they're clicked on. I believe you can assign the details to the outer div, and then images and text within it will pass through the same parameters -- but I haven't worked out how yet!

