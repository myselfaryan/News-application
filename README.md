# 📰 Newsly

A modern, full-stack News App that brings the world to your fingertips. Built with the latest technologies—React (Vite, Tailwind CSS) on the frontend and Node.js/Express/MongoDB on the backend—this app lets users explore, comment, and interact with news articles in a seamless, beautiful interface.

---

## ✨ Features

- 🔐 **User Authentication** — Secure sign up & sign in with JWT
- 📰 **Latest News** — Browse and read up-to-date news articles
- 💬 **Commenting** — Engage in discussions by commenting on articles
- 🏠 **User Dashboard** — Personalized dashboard for every user
- 📱 **Responsive UI** — Mobile-first, modern design powered by Tailwind CSS
- ⚡ **Fast & RESTful API** — Robust backend with Express.js
- 🗄️ **MongoDB Storage** — Scalable, flexible data storage

---

## 🛠️ Tech Stack

### Frontend
- [React](https://react.dev/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) ([Mongoose](https://mongoosejs.com/))

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) & npm
- [MongoDB](https://www.mongodb.com/)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/news-app.git
cd news-app
```

#### 2. Install dependencies
```bash
cd backend
npm install
cd ../frontend
npm install
```

#### 3. Set up environment variables
- Create a `.env` file in `backend/` with your MongoDB URI and JWT secret:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

#### 4. Run the backend
```bash
cd backend
npm start
```

#### 5. Run the frontend
```bash
cd frontend
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## 📁 Folder Structure

```
news-app/
├── backend/
│   ├── controllers/   # API controllers
│   ├── models/        # Mongoose models
│   ├── routes/        # Express routes
│   ├── utils/         # Utility functions
│   └── index.js       # Entry point
└── frontend/
    ├── src/
    │   ├── pages/       # React pages
    │   ├── auth/        # Auth forms/layout
    │   ├── components/  # UI components
    │   └── lib/         # Utilities
    ├── index.html
    └── ...
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please [open an issue](https://github.com/your-username/news-app/issues) first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---



