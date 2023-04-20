# Project Title
GAMING GENIE

## Demo link:
Access my site at [https://keen-haupia-db05a7.netlify.app/](https://keen-haupia-db05a7.netlify.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Unsolved](#unsolved)
- [Future](#future)

## About The App
[GAMING GENIE] is an app that utilizes MMOBOMB's API to find all kinds of games on their website along with gaming news and giveaways!

## Screenshots

`[Screenshots](https://imgur.com/NPKSAIW)`
`[Screenshots](https://imgur.com/j9jO7dw)`
`[Screenshots](https://imgur.com/cQtBel0)`
`[Screenshots](https://imgur.com/UUb53i1)`
`[Screenshots](https://imgur.com/bPmZaRv)`


## Technologies Used
`React`, `JavasScript`, `HTML/CSS`, `Flexbox`

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
Giveaway => Holds all current giveaways on MMOBombs websits
ErrorPage => If user gets cheeky and tries to enter a werid url a 404 page will pop up

**Components**
GameItem => Component that prints out specific details of a game that a user clicks on
Inputs => Stores all the inputs and dropdown buttons that lets user filter out their game of choosing
Nav => A permanent nav bar that lets user navigate to whatever page they want to see
NewsItem => Stores each array of news data onto the News page

## Unsolved Problems
I couldn't grab the screenshots of a single game and place it in the carousel.

## Future
I want to create a login system that lets users store their liked and disliked games.

