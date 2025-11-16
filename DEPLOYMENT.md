# Deployment Guide

## Automatic Deployment (GitHub Pages)

This project uses GitHub Actions to automatically deploy to GitHub Pages on every push to the `main` branch.

### Setup:
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch - deployment happens automatically

## Manual Deployment (Your Own Webhosting)

To manually build and deploy to your own webhosting:

### 1. Clone the repository:
```bash
git clone https://github.com/zakopi/bsfyzio-page-magic.git
cd bsfyzio-page-magic
```

### 2. Install dependencies:
```bash
npm install
# or if you use bun:
bun install
```

### 3. Build the project:
```bash
npm run build
# or if you use bun:
bun run build
```

### 4. Upload to your webhosting:
After the build completes, upload the entire contents of the `dist/` folder to your webhosting server:

- **FTP/SFTP**: Upload all files from `dist/` to your public_html or www directory
- **cPanel File Manager**: Zip the dist folder, upload, and extract
- **Command line (SSH)**: Use `scp` or `rsync` to transfer files

**Important**: Make sure to upload the contents of the `dist` folder, not the folder itself.

### 5. Configure your webserver:
For proper routing (especially for React Router), configure your webserver to serve `index.html` for all routes:

#### Apache (.htaccess):
Create/update `.htaccess` in your root directory:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx:
Add to your server configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Custom Domain / Subdirectory:
If deploying to a subdirectory (e.g., `https://yourdomain.com/subdir/`), update `vite.config.ts`:
```typescript
base: mode === "production" ? "/subdir/" : "/",
```

Then rebuild before uploading.
