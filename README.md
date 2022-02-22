# Todo App

## Project Summary

A full stack web application built with React, Node, Express, JavaScript, HTML, CSS, Bootstrap, Axios, and connected to a PostgreSQL database.

This application allows a user to create, edit, and delete a todo.

**Application hosted on Heroku:**
https://pagan-todo-client.herokuapp.com/

## Functionality Preview
Dashboard
![](https://lh5.googleusercontent.com/sDYrtz2ttmxqiRJLGy8-OOa5XeT_GHe7Dqh_RowwVGX0y9MPdKvTRaaoTE6zMRUcOX6ogd1HTLy11REnWFbrfryItv4Zl0CL9V-DDyLRBcSHuOePGaiOrjTqkDCNHOD_ROQTz_EB)

Create new Todo

![](https://im.ezgif.com/tmp/ezgif-1-2c1ea055c5.gif)

Update a Todo

![](https://im.ezgif.com/tmp/ezgif-1-aad5465103.gif)

Delete a Todo

![](https://im.ezgif.com/tmp/ezgif-1-35d22c21c4.gif)


## Technologies and Tools
- PostgreSQL
- Axios
- React
- Express
- JavaScript
- Node
- Knex
- HTML
- CSS
- Bootstrap


### Backend Existing files

The `./server` folder contains all the code for the backend project.

The table below describes the existing files in the `./server` folder:

| Folder/file path                                         | Description                                                                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `./server/knexfile.js`                                   | The Knex configuration file. You will not need to make changes to this file.                                        |
| `./server/server.js`                                     | Defines the Express application and connects routers.                                                               |
| `./server/api/db/connection.js`                          | The Knex connection file.                                                                                           |
| `./server/migrations`                                    | The Knex migrations folder.                                                                                         |
| `./server/seeds/`                                        | The Knex seeds folder.                                                                                              |                                           |                                                              |
| `./server/index.js`                                      | Defines the node server.                                                                                            |

### Frontend Existing files

The `./client` folder contains all the code for the frontend project.

The table below describes the existing files in the `./client` folder:

| Folder/file path                                   | Description                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `./client/src/App.js`                              | Defines the root application component.                                                                |
| `./client/src/index.js`                            | The main entry point for the React application.                                                        |
| `./client/src/components/Todos/Todo.js`            | Defines the "Todo" component, where todo data is mapped over and rendered.                             |
| `./client/src/components/Todos/TodoForm.js`        | Defines the "TodoForm" component, this is where users can input new todos.                             |
| `./client/src/components/Todos/TodoList.js`        | Defines the "TodoList" component, where todo data is mapped over and rendered.                         |
| `./client/src/components/Todos/index.js`           | Defines the "index.js" file, which acts as parent component for everything have to do with todos.      |
| `./client/src/App.css`                             | Defines CSS stylesheet for App.                                                                        |
| `./client/src/index.css`                           | Defines CSS stylesheet for index.js.                                                                   |

