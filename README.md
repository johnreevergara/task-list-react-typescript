# Task List

## What is the use of this Repository

This Project is a simple demonstration of how a task list or to-do application created.

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application Design

#### Components

1. **ToDoList** Component : This component displays the list of task. This component gets the data from the parent component which was passed through props

2. **Button** Component : This component was created to handle a reusable button with customizable UI depending on the pass props by the parent component

3. **Spinner** Component : This component displays a loader. This components was used to handle the loading phase of the application.

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

#### URL

The application has just one url / which ties to _App_ Component
