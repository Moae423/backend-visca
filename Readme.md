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

## Instalation

git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies

npm install

# Copy env example

cp .env.example .env

# Generate Prisma client

npx prisma generate

# Run migrations (if needed)

npx prisma migrate dev

## Running Web Apps

# Development (with hot reload)

npm run dev

# Production

npm run build
npm start

# File .ENV

DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
PORT=5000
