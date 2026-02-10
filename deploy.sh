#!/bin/bash

# Configuration
REPO_DIR="/root/sarthak-portfolio" # Update this if you clone elsewhere
BRANCH="main"

echo "🚀 Starting Deployment..."

# Navigate to repository
cd $REPO_DIR

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull origin $BRANCH

# Rebuild and restart container
echo "🔄 Rebuilding Docker container..."
docker compose down
docker compose up -d --build

echo "✅ Deployment Complete! Portfolio is live at http://localhost:3000 (mapped to subdomain via Caddy)"
