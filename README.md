# 🛒 MERN E-Commerce Website

A full-stack **E-Commerce Website** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
The project provides a complete online shopping experience with user authentication, product management, cart functionality, address management, and order placement.

## 🚀 Live Demo

**Frontend:** https://ecommerce-frontend-gnhl.onrender.com

**Backend API:** https://ecommerce-backend-e7ql.onrender.com

## 📂 GitHub Repository

https://github.com/Syedfaraz7860/ecommerce-website.git

---

## ✨ Features

### 👤 User Authentication
- User Registration
- User Login
- JWT-based authentication
- Password hashing using bcrypt
- Protected routes

### 🛍️ Product Management
- Display products
- Product details
- Product images
- Product categories
- Backend product APIs

### 🛒 Shopping Cart
- Add products to cart
- Update product quantity
- Remove products from cart
- View cart items
- Calculate cart total

### 📍 Address Management
- Add delivery address
- Store user address
- Select address during checkout

### 📦 Order Management
- Place orders
- Store order information
- Manage ordered products
- Store delivery address and user information

### 🔐 Backend Security
- JWT authentication
- Password hashing with bcrypt
- Protected API routes
- Environment variables for sensitive configuration

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer

### Deployment
- Render
- MongoDB Atlas
- GitHub

---

## 📁 Project Structure

```text
ecommerce-website/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔗 API Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/products` | Get products |
| POST | `/api/products` | Add product |
| GET | `/api/cart` | Get cart |
| POST | `/api/cart` | Add product to cart |
| PUT | `/api/cart` | Update cart |
| DELETE | `/api/cart` | Remove cart item |
| POST | `/api/address` | Add address |
| POST | `/api/order` | Place an order |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Syedfaraz7860/ecommerce-website.git
```

### 2. Go to the Project Folder

```bash
cd ecommerce-website
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Create `.env`

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start Backend

```bash
npm start
```

Backend will run on:

```text
http://localhost:5000
```

### 6. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 7. Start Frontend

```bash
npm run dev
```

The frontend will run on the Vite development URL shown in your terminal.

---

## 🔄 Application Flow

```text
User
  ↓
Register / Login
  ↓
Browse Products
  ↓
View Product
  ↓
Add to Cart
  ↓
Manage Cart
  ↓
Add Delivery Address
  ↓
Place Order
  ↓
Order Stored in MongoDB
```

---

## 📸 Screenshots

Add your project screenshots here:

```markdown
![Home Page](screenshots/home.png)

![Products Page](screenshots/products.png)

![Cart Page](screenshots/cart.png)

![Login Page](screenshots/login.png)

![Checkout Page](screenshots/checkout.png)
```

---

## 🎯 Project Objectives

- Build a complete full-stack e-commerce application.
- Implement secure user authentication.
- Create RESTful APIs using Node.js and Express.js.
- Store and manage application data using MongoDB.
- Develop a responsive React.js frontend.
- Implement shopping cart and order functionality.
- Deploy the application using cloud platforms.

---

## 📚 What I Learned

Through this project, I gained practical experience in:

- MERN Stack development
- REST API development
- MongoDB database management
- JWT authentication
- Password hashing
- React component development
- React Router
- Axios API integration
- File uploads using Multer
- Git and GitHub
- Deployment using Render
- MongoDB Atlas

---

## 🔮 Future Improvements

- Online payment integration
- Admin dashboard
- Product search and filtering
- Product reviews and ratings
- Order tracking
- Wishlist functionality
- Email notifications
- Improved product recommendation system

---

## 👨‍💻 Author

**Syed Farazdak Mehdi**

- GitHub: https://github.com/Syedfaraz7860

---

## ⭐ Support

If you find this project useful, please consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.
