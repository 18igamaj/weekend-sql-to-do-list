# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

# To-Do App To-Do
-- Create html,css,vendor folder that holds-- jquery and sweety. Source files

-- Bring in jQuery

-[] on DOM - input for new TASK and SUBMIT button

-- `'run npm init' and npm install npm install express, install body-parser,pg,pool`
-- database name should be `weekend-to-do-app`
-- Create database.sql file to hold the setup queries you run in Postico, including CREATE TABLE and dummy data INSERT queries

- On Client - event handler for new task button
-   Create onReady, that has 
-   Ajax Get and counter part on backend
--      Need a renderFunction that appends your tasks(inputs) 
-   That calls Ajax Post
    That will go post it on our router.post
        - on server app.post for new task or (router modules)
-- use pg to INSERT new task into database

-- create a 'Complete' and 'Delete' with data-id attributes
-- Complete button should update which calls Ajax PUT
--  That sends the Id in the params
-- On server Put handler that query the database and sends back 200! with the Update query

-- Delete function that handles