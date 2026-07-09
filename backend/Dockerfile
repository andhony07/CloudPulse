# ─── Stage 1: Base ────────────────────────────────────────────────────────────
FROM node:20-alpine AS base

LABEL maintainer="DevOps Monitoring Team"
LABEL description="AI-Powered Cloud-Based DevOps Monitoring Dashboard — Backend"

# Install system dependencies required by some npm packages
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy package files separately for better layer caching
COPY package*.json ./

# ─── Stage 2: Development ─────────────────────────────────────────────────────
FROM base AS development

ENV NODE_ENV=development

RUN npm install

COPY . .

EXPOSE 5000

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "dev"]

# ─── Stage 3: Production ──────────────────────────────────────────────────────
FROM base AS production

ENV NODE_ENV=production

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# Create logs directory with proper ownership
RUN mkdir -p logs && chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/server.js"]
