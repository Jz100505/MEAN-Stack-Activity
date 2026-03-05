# 📚 Books Vault — MEAN Stack Library Management System

A full-stack CRUD web application for cataloguing books, built with the MEAN stack (MongoDB, Express.js, Angular, Node.js).

---

## ⚠️ Note on Node Modules

> The `node_modules` folders for both the **API** and **UI/mean-crud** are **not included** in this repository due to the large number of files they contain.
> You will need to install dependencies manually before running the project. See the setup instructions below.

---

## 🗂️ Project Structure

```
mean-finals/
├── API/
│   ├── index.js          # Express REST API server
│   ├── package.json
│   └── package-lock.json
│
└── UI/
    └── mean-crud/
        ├── src/
│       │   └── app/
│       │       ├── app.component.ts
│       │       ├── app.component.html
│       │       ├── app.component.css
│       │       ├── app.component.spec.ts
│       │       ├── app.config.ts
│       │       └── app.routes.ts
│       ├── package.json
│       └── angular.json
```

---

## 🛠️ Prerequisites

Make sure the following are installed on your machine before proceeding:

- [Node.js](https://nodejs.org/) v18 or higher
- [Angular CLI](https://angular.io/cli) — install globally via `npm install -g @angular/cli`
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on port `27017`

---

## 🚀 Setup & Running the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Jz100505/MEAN-Stack-Activity.git
cd MEAN-Stack-Activity
```

### 2. Install API Dependencies

```bash
cd API
npm install
```

### 3. Install Angular Dependencies

```bash
cd ../UI/mean-crud
npm install
```

---

## ▶️ Running the Application

### Start the API Server

```bash
cd API
node index.js
```

> Server will run on **http://localhost:5038**

### Start the Angular Frontend

Open a **new terminal** and run:

```bash
cd UI/mean-crud
ng serve
```

> App will run on **http://localhost:4200**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/books/GetBooks` | Fetch all books |
| `POST` | `/api/books/AddBook` | Add a new book |
| `PUT` | `/api/books/UpdateBook?id={id}` | Update a book by ID |
| `DELETE` | `/api/books/DeleteBook?id={id}` | Delete a book by ID |

---

## ✨ Features

- Add, view, edit, and delete book entries
- Fields: Title, Description, Price, Author, Genre
- Inline edit panel per book row
- Animated dark-emerald UI with custom CSS design system
- Live volume count in the hero section

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Database | MongoDB (local) |
| Backend | Node.js + Express.js |
| Frontend | Angular 17+ (Standalone Components) |
| Styling | Custom CSS (no UI framework) |

---

*MEAN Stack · 2026*
