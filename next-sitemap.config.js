/** @type {import('next-sitemap').IConfig} */
module.exports ={
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://george-beyrouti-personal-website.vercel.app/" || "http://localhost:3000",      
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}
