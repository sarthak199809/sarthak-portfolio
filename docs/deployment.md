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

## Step 3: Configure Reverse Proxy (Existing Caddy)

Since you already have a Caddy container running for n8n, you should use it to handle `portfolio.sarthakpm.online`. You have two ways to do this:

### Option A: Via Docker Network (Recommended)
This is the cleanest way. Both containers will "talk" internally.

1.  **Find your n8n network name**:
    Run `docker network ls` on your server. It's likely something like `n8n_default` or `n8n_network`.
2.  **Update `docker-compose.yml`**:
    Ensure the `networks` block in your portfolio's `docker-compose.yml` matches that name.
3.  **Update Caddyfile**:
    Update your n8n's Caddyfile to point to the portfolio container by its name:
    ```caddy
    portfolio.sarthakpm.online {
        reverse_proxy portfolio:3000
    }
    ```

### Option B: Via Host IP (Simplest)
If you don't want to mess with networks, you can point Caddy to the host's IP.

1.  **Update Caddyfile**:
    ```caddy
    portfolio.sarthakpm.online {
        reverse_proxy 172.17.0.1:3000
    }
    ```
    *(Note: `172.17.0.1` is usually the default Docker bridge gateway IP which refers to your host).*

### Apply Changes
After updating the `Caddyfile`, reload Caddy:
```bash
docker exec -it <caddy-container-name> caddy reload --config /etc/caddy/Caddyfile
```

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
