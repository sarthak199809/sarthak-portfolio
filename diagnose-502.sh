#!/bin/bash

echo "🔍 Diagnosing 502 Bad Gateway Error..."
echo ""

echo "Step 1: Checking if portfolio container is running..."
docker ps --filter "name=portfolio"
echo ""

echo "Step 2: Checking portfolio container logs..."
docker logs portfolio --tail 50
echo ""

echo "Step 3: Verifying network connectivity..."
echo "Containers on n8n-docker_default network:"
docker network inspect n8n-docker_default --format '{{range .Containers}}{{.Name}} {{end}}'
echo ""

echo "Step 4: Testing connection from Caddy to portfolio..."
CADDY_CONTAINER=$(docker ps --filter "name=caddy" --format "{{.Names}}" | head -1)
if [ -z "$CADDY_CONTAINER" ]; then
    echo "❌ Caddy container not found!"
else
    echo "Found Caddy container: $CADDY_CONTAINER"
    echo "Testing connection to portfolio:3000..."
    docker exec $CADDY_CONTAINER wget -O- http://portfolio:3000 2>&1 | head -20
fi

echo ""
echo "✅ Diagnostics complete!"
echo ""
echo "Common fixes:"
echo "1. If portfolio container is not running: Run './deploy.sh'"
echo "2. If portfolio is not on n8n-docker_default network: Check docker-compose.yml"
echo "3. If connection test fails: Verify Caddyfile uses 'portfolio:3000'"
