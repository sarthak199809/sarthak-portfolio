# Deployment Guide: Portfolio on Hetzner

This guide covers setting up your portfolio on a Hetzner server with Docker, Nginx, and a Git-based workflow.

## Prerequisites

1.  **Hetzner Server**: Access via SSH.
2.  **Domain**: `portfolio.sarthakpm.online` pointing to your server IP.
3.  **Git Repo**: Your local code pushed to GitHub/GitLab.

---

## Step 1: Push Code to Git

Ensure your local code is committed and pushed to your remote repository (GitHub/GitLab).

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## Step 2: Server Setup (One-Time)

SSH into your Hetzner server:
```bash
ssh root@your_server_ip
```

### 1. Clone the Repository
Navigate to where you want the project (e.g., `/root`):
```bash
cd /root
git clone https://github.com/sarthak199809/sarthak-portfolio.git sarthak-portfolio
cd sarthak-portfolio
```

### 2. Make Deploy Script Executable
We created a `deploy.sh` script for you. Make it runnable:
```bash
chmod +x deploy.sh
```

---

## Step 3: Configure Reverse Proxy (Caddy)

Since you already have a Caddy setup for n8n, you just need to add a block to your `Caddyfile` to route `portfolio.sarthakpm.online` to the portfolio container.

### Update Caddyfile
Locate your current `Caddyfile` (usually where your n8n docker-compose is or in `/etc/caddy/Caddyfile`) and add:

```caddy
portfolio.sarthakpm.online {
    reverse_proxy localhost:3000
}
```

### Apply Changes
If you are running Caddy in Docker, restart or reload it:
```bash
docker exec -it <caddy-container-name> caddy reload --config /etc/caddy/Caddyfile
```

*Note: Caddy will automatically handle SSL (HTTPS) for your subdomain.*

---

## Step 4: Deploy

Run the deployment script to build and start the Docker container:

```bash
./deploy.sh
```

---

## Future Updates

To update the live site after pushing changes to Git:
1. SSH into the server.
2. Run `./deploy.sh`.
