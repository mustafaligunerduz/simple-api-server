# Simple API Server

A minimal and clean REST API built with Node.js and Express.
This project is designed to be simple, understandable, and easy to extend.

---

## 🚀 Features

* API Key authentication
* Basic CRUD operations (Users)
* Rate limiting
* Request logging (Morgan)
* Error handling middleware
* Simple validation
* Health check endpoint

---

## 📦 Installation

```bash
git clone https://github.com/mustafaligunerduz/simple-api-server.git
cd simple-api-server
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
API_KEY=123456
```

---

## ▶️ Running the Server

```bash
npm run dev
```

or

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 🔐 Authentication

All protected routes require an API key.

### Header:

```
x-api-key: YOUR_API_KEY
```

---

## 📡 Endpoints

### Health Check

```
GET /health
```

---

### Get All Users

```
GET /api/users
```

---

### Get User by ID

```
GET /api/users/:id
```

---

### Create User

```
POST /api/users
```

#### Body:

```json
{
  "name": "Ali"
}
```

---

### Update User

```
PUT /api/users/:id
```

#### Body:

```json
{
  "name": "New Name"
}
```

---

### Delete User

```
DELETE /api/users/:id
```

---

## 🧪 Example Request

```bash
curl -H "x-api-key: 123456" http://localhost:3000/api/users
```

---

## ⚠️ Notes

* Data is stored in memory (no database)
* All data will be lost when the server restarts
* This project is intended for learning and simple use cases

---

## 📌 Future Improvements

* Database integration (MongoDB)
* JWT authentication
* Swagger documentation
* Deployment support

---

## 🧑‍💻 Author

?

---
