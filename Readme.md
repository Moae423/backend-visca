# 🚀 Student Management API

Simple REST API built with **Express** and **TypeScript**, using **Prisma ORM**.

## ✨ Tech Stack

- **Express.js** — HTTP server framework
- **TypeScript** — Strong typing for JavaScript
- **Prisma ORM** — Database access
- **Zod** — Input validation
- **PostgreSQL** (or MySQL / SQLite)
- **dotenv** — Environment variables
- **ESLint + Prettier** — Linting & formatting

---

## 📁 Project Structure

```bash
src/
├── controllers/     # Logic for handling requests
├── routes/          # API route definitions
├── schemas/         # Zod schemas for validation
├── services/        # Database & business logic
├── prisma/          # Prisma schema & migrations
├── utils/           # Helpers
├── index.ts         # Entry point
└── config/          # Env config, constants
```

## 1️⃣ Clone repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

## 2️⃣ Install dependencies

npm install

## 3️⃣ Copy environment variables

cp .env.example .env

## 4️⃣ Setup database

# Edit DATABASE_URL di file .env sesuai database kamu (PostgreSQL/MySQL/SQLite)

## 5️⃣ Generate Prisma client

npx prisma generate

## 6️⃣ Run migrations to create tables in the database

npx prisma migrate dev --name init

## ✅ Done! Project is ready to run.
