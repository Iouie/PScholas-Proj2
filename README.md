# Project Title
GAMING GENIE

## Demo link:
Access my site at [https://dainty-cobbler-2526e0.netlify.app/](https://dainty-cobbler-2526e0.netlify.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Unsolved Problems](#unsolved)
- [Future](#future)

## About The App
[GAMING GENIE] is an app that utilizes MMOBomb's API to find all kinds of games on MMOBomb's website along with gaming news and giveaways! Users are able to check the minimum requirements, get the description, and get a link to sign up for whatever game they look through.

## Screenshots

![Screenshot 1](https://i.imgur.com/NPKSAIW.png)
![Screenshot 2](https://i.imgur.com/bPmZaRv.png)
![Screenshot 3](https://i.imgur.com/cQtBel0.png)
![Screenshot 4](https://i.imgur.com/j9jO7dw.png)
![Screenshot 5](https://i.imgur.com/YbV97Z4.png)


## Technologies Used
`React`, `JavasScript`, `HTML/SCSS`, `Flexbox`, `MMOBomb API`

## Setup
- download or clone the repository
- run `npm install`
- ...

## Approach
Initially, I was struggling to find what API to use. I was thinking of combining an NBA and Youtube API to show highlights of a player searched but I needed to pay for an API key for NBA. Then I was thinking of using Polygon.io's stock API to search news based off a ticker that user chooses but that sounded too boring. Ultimately I chose MMOBombs API since it was really easy to understand. I separated components to components and pages.  


**Pages**  

Home => Homepage of my website  

News => Holds all news data from NewsItem component  

Games => Initially holds all game data API sends, users can mess with inputs to filter out games they want  

Giveaway => Holds all current giveaways on MMOBombs website  

ErrorPage => If user gets cheeky and tries to enter a werid url a 404 page will pop up  


**Components**  

GameItem => Component that prints out specific details of a game that a user clicks on  

Inputs => Stores all the inputs and dropdown buttons that lets user filter out their game of choosing  

Nav => A permanent nav bar that lets user navigate to whatever page they want to see  

NewsItem => Stores each array of news data onto the News page

## Unsolved Problems
I couldn't grab the screenshots of a single game and place it in the carousel.
Refreshing on any other tab other than home tab gives me a Page not found on Netlify.
My 404 Page Error doesn't show up when I break url.

## Future
I want to create a login system that lets users store their liked and disliked games. I also want to use Redux to manage my states.

