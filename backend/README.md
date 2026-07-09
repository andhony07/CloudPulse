# AI-Powered Cloud-Based DevOps Monitoring Dashboard — Backend

> **Phase 1 complete.** This repository contains the production-ready backend architecture. No business logic has been implemented yet — that begins in Phase 2.

---

## Overview

A scalable Node.js/Express backend built with **Clean Architecture** principles:

| Layer | Directory | Responsibility |
|---|---|---|
| Routes | `src/routes/` | HTTP routing & input binding |
| Controllers | `src/controllers/` | Request/response orchestration |
| Services | `src/services/` | Business logic |
| Repositories | `src/repositories/` | Data access (Mongoose) |
| Models | `src/models/` | Mongoose schemas |
| DTOs | `src/dto/` | API contract shapes |

---

## Tech Stack

| Concern | Technology |
|---|---|
| Runtime | Node.js ≥ 18 |
| Framework | Express 4 |
| Database | MongoDB + Mongoose 8 |
| Real-time | Socket.IO 4 |
| Authentication | JSON Web Tokens (Phase 2) |
| Validation | express-validator |
| Logging | Winston + daily-rotate-file |
| Rate limiting | express-rate-limit |
| Security | Helmet, CORS |
| Containerisation | Docker (multi-stage) |

---

## Folder Structure

```
backend/
├── src/
│   ├── ai/              # LLM client, prompt assembly, response parsing
│   ├── config/          # Environment, CORS, Morgan, Socket.IO config
│   ├── constants/       # Frozen app-wide constants
│   ├── controllers/     # Route handlers (thin orchestration layer)
│   ├── database/        # MongoDB connection
│   ├── dto/             # Data Transfer Objects (request & response shapes)
│   ├── events/          # In-process EventEmitter bus
│   ├── helpers/         # Pure utility functions
│   ├── interfaces/      # JSDoc typedefs & abstract base classes
│   ├── jobs/            # Scheduled background tasks
│   ├── middleware/      # Express middleware (error, auth, validate, …)
│   ├── models/          # Mongoose schemas
│   ├── prompts/         # AI prompt templates (pure functions)
│   ├── providers/       # Third-party SDK adapters
│   ├── repositories/    # Data-access layer
│   ├── routes/          # Express routers
│   ├── services/        # Business-logic layer
│   ├── sockets/         # Socket.IO initialisation & event handlers
│   ├── types/           # Shared JSDoc type definitions
│   ├── utils/           # logger, AppError, response helpers
│   ├── app.js           # Express application factory
│   └── server.js        # HTTP server entry point
├── tests/               # Jest test suites
├── .env.example         # Required environment variables
├── Dockerfile           # Multi-stage Docker build
└── README.md
```

---

## Quick Start (local)

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- MongoDB running locally (`mongod`) **or** a MongoDB Atlas URI

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env — set MONGO_URI and JWT_SECRET at minimum
```

### 3. Start the server

```bash
# Development (auto-restarts on file changes)
npm run dev

# Production
npm start
```

The server listens on `http://localhost:5000` by default.

### 4. Verify it's running

```bash
curl http://localhost:5000/api/health
```

Expected response:

```json
{
  "success": true,
  "message": "OK",
  "uptime": 1.234,
  "timestamp": "2026-07-09T00:00:00.000Z",
  "environment": "development"
}
```

---

## Docker

```bash
# Build the production image
docker build --target production -t devops-monitoring-backend .

# Run
docker run -p 5000:5000 \
  -e MONGO_URI="mongodb://host.docker.internal:27017/devops_monitoring" \
  -e JWT_SECRET="your_secret" \
  devops-monitoring-backend
```

---

## Testing

```bash
npm test
```

---

## Environment Variables

See [`.env.example`](.env.example) for the full list with descriptions.

| Variable | Required | Default | Description |
|---|---|---|---|
| `PORT` | No | `5000` | HTTP server port |
| `NODE_ENV` | No | `development` | Runtime environment |
| `MONGO_URI` | **Yes** | — | MongoDB connection string |
| `JWT_SECRET` | **Yes** | — | Access token signing secret |
| `JWT_REFRESH_SECRET` | **Yes** | — | Refresh token signing secret |
| `LOG_LEVEL` | No | `info` | Winston log level |

---

## Phase Roadmap

| Phase | Status | Description |
|---|---|---|
| **Phase 1** | ✅ Complete | Architecture & configuration scaffold |
| Phase 2 | Pending | Authentication, user management |
| Phase 3 | Pending | Metrics ingestion & storage |
| Phase 4 | Pending | Alerting engine |
| Phase 5 | Pending | AI anomaly detection & root-cause analysis |
| Phase 6 | Pending | Real-time Socket.IO event streaming |
| Phase 7 | Pending | Dashboard API & reporting |
