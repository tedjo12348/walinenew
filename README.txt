
Waline + Neon + Vercel Template

DEPLOY STEPS

1. Upload this project to GitHub
2. Import repository into Vercel
3. Add Environment Variable in Vercel:

POSTGRES_URL = your neon connection string

4. Deploy

Your API endpoints will be:

/api/comment
/api/reaction
/api/article-reaction

Example:

https://yourdomain.vercel.app/api/article-reaction?path=/post/example

Database:

Run the SQL inside schema.sql in Neon SQL editor.
