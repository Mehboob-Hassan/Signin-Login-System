# 🛡️ User Authentication API

This project is a **user registration and login API**, built during my early learning phase of full-stack development. It serves as a foundational backend application demonstrating how to register users, store their data securely, and authenticate them during login.

## 🚀 Features

- Register new users
- Hash and store user credentials in MongoDB
- Authenticate users on login
- Built with Node.js and Express.js

## 🧰 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management


## 🧪 API Endpoints

### POST `/register`

Registers a new user.

**Body Parameters:**

- `username`: string
- `email`: string
- `password`: string

### POST `/login`

Authenticates an existing user.

**Body Parameters:**

- `email`: string
- `password`: string

## 🛠️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/Mehboob-Hassan/Signin-Login-System.git

cd Signin-Login-System

npm install

```

### Setup Environment Variable
Create a .env file in the root directory and add:

```
MONGODB_URI=your_mongo_uri_here
PORT=5000
```

### Run the server
 ```
 npm start

 ```

_Devloeped with 🧡 by Me._