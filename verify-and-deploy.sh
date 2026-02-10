#!/bin/bash

echo "🔍 Step 1: Verifying Dockerfile Node version..."
head -1 Dockerfile

echo ""
echo "🧹 Step 2: Cleaning up old Docker images..."
docker compose down
docker system prune -af --volumes

echo ""
echo "📥 Step 3: Pulling fresh Node 20 base image..."
docker pull node:20-alpine

echo ""
echo "🔨 Step 4: Building with no cache..."
docker compose build --no-cache

echo ""
echo "🚀 Step 5: Starting container..."
docker compose up -d

echo ""
echo "✅ Deployment Complete! Check logs with: docker compose logs -f"
