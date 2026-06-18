# Scatch

Scatch is a full-stack e-commerce web application built using Node.js, Express.js, MongoDB, and EJS. The application provides user authentication, product management, shopping cart functionality, session handling, and an admin dashboard for managing products.

## Features

### User Features

* User Registration and Login
* JWT Authentication
* Secure Password Hashing using bcrypt
* Session and Cookie Management
* Browse Products
* Add Products to Cart
* Increase or Decrease Product Quantity
* Dynamic Cart Calculation
* Logout Functionality

### Admin Features

* Owner/Admin Authentication
* Product Creation Dashboard
* Product Management
* Protected Admin Routes
* Secure Product Upload Workflow

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* EJS
* Tailwind CSS
* Remix Icons

### Authentication & Security

* JWT (JSON Web Tokens)
* bcrypt
* express-session
* connect-flash
* cookie-parser

## Project Structure

```bash
Scatch/
│
├── config/
│   └── mongoose-connection.js
│
├── controllers/
│   └── authController.js
│
├── middlewares/
│   ├── isLoggedIn.js
│   └── isOwnerLoggedIn.js
│
├── models/
│   ├── user-model.js
│   ├── owner-model.js
│   └── product-model.js
│
├── routes/
│   ├── index.js
│   ├── usersRouter.js
│   ├── ownersRouter.js
│   └── productsRouter.js
│
├── utils/
│   └── generateToken.js
│
├── views/
│   ├── partials/
│   ├── shop.ejs
│   ├── cart.ejs
│   ├── createproducts.ejs
│   └── ...
│
├── public/
├── .env
├── app.js
└── package.json
```

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/scatch.git
cd scatch
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_KEY=your_secret_key
NODE_ENV=development
EXPRESS_SESSION_SECRET=your_session_secret
```

### Start Development Server

```bash
npm start
```

or

```bash
nodemon app.js
```

## Authentication Flow

### User

1. Register Account
2. Login
3. JWT Token Generated
4. Token Stored in Cookies
5. Access Protected Routes

### Owner/Admin

1. Create Initial Owner Account
2. Login as Owner
3. Access Admin Dashboard
4. Create and Manage Products

## Cart Functionality

* Add Products to Cart
* Remove Products from Cart
* Quantity Management
* Dynamic Price Calculation
* Order Summary Generation

## Future Improvements

* Product Categories
* Product Search and Filters
* Wishlist System
* Order Placement
* Payment Gateway Integration
* User Profile Management
* Product Reviews and Ratings
* Inventory Management
* Admin Analytics Dashboard

## Author

**Ritvik Verma**

GitHub: https://github.com/ritvikvermaa
