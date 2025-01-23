# Task Manager 📝
================

Table of Contents
-----------------

- [Task Manager 📝](#task-manager-)
  - [Table of Contents](#table-of-contents)
  - [Introduction 📚](#introduction-)
  - [What I Learned 😎](#what-i-learned-)
  - [Features 🎉](#features-)
  - [Technologies Used 🚀](#technologies-used-)
  - [Project structure🏗️](#project-structure️)
  - [Usage 📊](#usage-)
    - [Interactive Task Manager 🤔](#interactive-task-manager-)
    - [Example Use Cases 📚](#example-use-cases-)
    - [Task Manager Roadmap 🗺️](#task-manager-roadmap-️)



## Introduction 📚
 Task Manager is a project designed to help users manage their tasks efficiently 🕒. It provides a simple and intuitive interface for creating, editing, and deleting tasks 📝.

## What I Learned 😎
In this project, I gained hands-on experience with:
* **Next.js**, **React**, and **Tailwind CSS** for the frontend 🌐
* **Node.js**, **Express.js**, **Mongoose** and **MongoDB** for the backend 📊
* **Version control** using Git 📁
* **Deployment** using Vercel 🚀
* **Global State Management** using Context API 🌐

## Features 🎉

* Create new tasks with descriptions and due dates 📅
* Edit existing tasks 📝
* Delete tasks 🚮
* View all tasks 👀
  
## Technologies Used 🚀

* Frontend: Next.js 🌐, React 🤖, Tailwind CSS 💻
* Backend: Node.js 📊, Express.js 🚀
* Database: MongoDB 📈, Mongoose 📊
* Version Control: Git 📁
* Deployment: Vercel 🚀

## Project structure🏗️

A simple project structure of my Task Manager project is as follows: 👇👇👇

```
task-manager
├─ .gitignore
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ tasks
│  │  │     └─ route.js
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.js
│  │  └─ page.js
│  ├─ components
│  │  ├─ AddTask.js
│  │  ├─ Card.js
│  │  ├─ CompleteLebel.js
│  │  ├─ EditTask.js
│  │  ├─ InfoCard.js
│  │  ├─ Navbar.js
│  │  ├─ PendingLebel.js
│  │  └─ ProgressLebel.js
│  ├─ context
│  │  └─ TaskContext.js
│  ├─ lib
│  │  └─ mongoose.js
│  └─ models
│     └─ Task.js
└─ tailwind.config.mjs

```

## Usage 📊

To use Task Manager, follow these steps:

1. Run the application using `npm run dev` 💻
2. Create a new task by clicking the "Create Task" button 📈
3. Enter the task description and due date 📅
4. Click the "Save" button to save the task 💾

### Interactive Task Manager 🤔

You can interact with Task Manager by answering the following questions:

* Do you want to create a new task? (yes/no) 🤔
* Do you want to edit an existing task? (yes/no) 🤔
* Do you want to delete a task? (yes/no) 🤔
* Do you want to view all tasks? (yes/no) 🤔

Please respond with one of the above options 📝.

### Example Use Cases 📚

* Create a new task: `yes` 📈
* Edit an existing task: `yes` 📝
* Delete a task: `yes` 🚮
* View all tasks: `yes` 👀


### Task Manager Roadmap 🗺️

* Add support for multiple users 👥
* Add support for task prioritization 📈
* Add support for task reminders ⏰
