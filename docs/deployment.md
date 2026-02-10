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

## Step 3: Configure Reverse Proxy (Nginx)

Since you already have n8n running, you likely have Nginx or a similar proxy. You need to route `portfolio.sarthakpm.online` to the portfolio container running on port `3000`.

### Create Nginx Config
Create a new config file:
```bash
nano /etc/nginx/sites-available/portfolio
```

Paste the following configuration:

```nginx
server {
    server_name portfolio.sarthakpm.online;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Optional: SSL Configuration (Certbot will handle this later)
    listen 80;
}
```

### Enable Site and Restart Nginx
```bash
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t  # Test configuration
systemctl restart nginx
```

### SSL (HTTPS) Setup
Use Certbot to secure the subdomain:
```bash
certbot --nginx -d portfolio.sarthakpm.online
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
