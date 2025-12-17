# Deployment Guide - KIOSK Mega Mart Website

This guide will help you deploy the KIOSK Mega Mart website to various hosting platforms.

## Prerequisites

- Node.js 18.x or higher installed
- Git repository (optional but recommended)
- Domain name (kioskmegamart.com or similar)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications, with automatic HTTPS, global CDN, and zero configuration.

### Steps:

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "Add New Project"
   - Import your Git repository or upload the project folder
   - Vercel will automatically detect Next.js

3. **Configure Build Settings** (Usually auto-detected)
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - You'll get a free `.vercel.app` domain

5. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain (kioskmegamart.com)
   - Follow DNS configuration instructions

### Environment Variables (if needed)
No environment variables are currently required for this project.

---

## Option 2: Deploy to Netlify

Netlify is another excellent option with similar features to Vercel.

### Steps:

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live with a `.netlify.app` domain

5. **Add Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain and configure DNS

---

## Option 3: Deploy to Traditional Hosting (cPanel/Shared Hosting)

If you're using traditional web hosting with cPanel or similar:

### Steps:

1. **Build the Static Export**

   First, modify `next.config.js` to enable static export:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }

   module.exports = nextConfig
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

   This will create an `out` folder with static files.

3. **Upload to Hosting**
   - Use FTP/SFTP or cPanel File Manager
   - Upload all files from the `out` folder to `public_html` or `www` directory
   - Ensure all files maintain their structure

4. **Configure Domain**
   - Point your domain to the hosting server
   - Configure SSL certificate (Let's Encrypt via cPanel)

**Note:** This approach has limitations:
- No server-side rendering
- No API routes
- Some dynamic features may not work

---

## Option 4: Deploy to AWS/DigitalOcean/VPS

For more control, deploy to a VPS or cloud provider:

### Steps:

1. **Set Up Server**
   - Ubuntu 20.04+ recommended
   - Install Node.js 18+
   - Install PM2 for process management

2. **Upload Your Code**
   ```bash
   git clone <your-repo>
   cd kiosk-mega-mart
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "kiosk-mart" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx as Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name kioskmegamart.com www.kioskmegamart.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Install SSL Certificate**
   ```bash
   sudo certbot --nginx -d kioskmegamart.com -d www.kioskmegamart.com
   ```

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads on both desktop and mobile
- [ ] All sections display correctly (Hero, What We Offer, How to Order, Location, Footer)
- [ ] WhatsApp links work correctly (opens WhatsApp with pre-filled message)
- [ ] Phone call links work on mobile devices
- [ ] Google Maps embed loads properly
- [ ] Sticky buttons appear on mobile devices
- [ ] All images load correctly
- [ ] Page is responsive across different screen sizes
- [ ] SEO meta tags are present (check page source)
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is properly configured

---

## Domain Configuration

### DNS Settings for kioskmegamart.com

**For Vercel/Netlify:**
1. Add A record: `@` → `76.76.21.21` (Vercel IP, check their docs)
2. Add CNAME record: `www` → `cname.vercel-dns.com`

**For VPS/Custom Server:**
1. Add A record: `@` → Your server IP
2. Add A record: `www` → Your server IP

---

## Performance Optimization Tips

1. **Enable Compression** - Gzip/Brotli (automatic on Vercel/Netlify)
2. **CDN Configuration** - Already enabled on Vercel/Netlify
3. **Image Optimization** - Next.js handles this automatically
4. **Caching Headers** - Configure for static assets

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

### WhatsApp Links Not Working
- Verify phone numbers are correct in components
- Ensure proper URL encoding for messages

### Google Maps Not Loading
- Check if the embed URL is correct
- Verify no CORS issues

---

## Support

For deployment issues specific to this project, check:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Last Updated:** December 2024
