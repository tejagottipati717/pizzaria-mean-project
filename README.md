# 🍕 Pizzeria - MEAN Stack Application

A full-stack pizza ordering web application built using the **MEAN Stack (MongoDB, Express.js, Angular, and Node.js)**. The application allows users to browse pizzas, customize their own pizza, manage the shopping cart, and securely place orders after authentication.

---

## 🚀 Features

- User Registration & Login
- Persistent User Authentication
- Browse Available Pizzas
- Build Your Own Pizza
- Add/Remove Items from Cart
- Update Item Quantity
- Cart Summary & Checkout
- Responsive User Interface
- MongoDB Atlas Database Integration
- RESTful API using Express.js
- Live Deployment using Netlify & Render

---

## 🛠️ Tech Stack

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
Pizzeria-Mean-Project
│
├── pizzariaapp/          # Angular Frontend
│
├── pizzariaserver/       # Node.js + Express Backend
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/pizzaria-mean-project.git
```

### 2. Install Frontend Dependencies

```bash
cd pizzariaapp
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../pizzariaserver
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside **pizzariaserver**.

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

## ▶️ Run Backend

```bash
cd pizzariaserver
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## ▶️ Run Frontend

```bash
cd pizzariaapp
ng serve
```

Application runs on:

```
http://localhost:4200
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/pizzas | Get all pizzas |
| GET | /api/ingredients | Get ingredients |
| GET | /api/cart | Get cart items |
| POST | /api/cart | Add item to cart |
| PUT | /api/cart/:id | Update quantity |
| DELETE | /api/cart/:id | Remove cart item |
| DELETE | /api/cart | Clear cart |
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

## 📸 Application Modules

- Home Page
- Order Pizza
- Build Your Pizza
- Shopping Cart
- User Login
- User Registration
- Checkout

---

## 🌍 Live Demo

Frontend

```
https://pizzeriaapp.netlify.app/
```

Backend API

```
https://pizzaria-server.onrender.com/api/pizzas
```

---

## 📌 Future Enhancements

- Online Payment Gateway
- Order History
- User Profile
- Admin Dashboard
- Search & Filters
- Wishlist
- Coupons & Offers

---

## 👨‍💻 Author

**Teja Gottipati**

---

## 📄 License

This project is developed for learning and project demonstration purposes.
