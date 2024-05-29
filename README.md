# Social-Network-API

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Description
This backend for a social network is built using MongoDB. It allows users to post thoughts and others to respond with reactions. Users can also add friends, and there are options to remove friends, thoughts, and reactions as desired.

## Installation
Please run npm i in this app's root directory. Once completed the intall run node utils/seed to seed the database.
Once this had completed run node server.js to start the application. All can be viewed in Insomnia.

## Tests
Test case seen in the following walkthrough: <br>
[Video Walkthrough](https://drive.google.com/file/d/1m5gO7SzzlUgWkJsstsk2NMqQrAyrOWyK/view?usp=sharing)

## License
This software is covered under the following license:
MIT No Attribution License <br>
[View license](https://opensource.org/license/mit-0/)

# Questions
[Jaystarz360 - Joshua Cherry](https://github.com/Jaystarz360)
