![image](https://github.com/gunn-elimination/elimination-2024/assets/42813970/152c3fba-71fa-45e8-9554-b164af35c4aa)

# Gunn Elimination 2024

[![Netlify Status](https://api.netlify.com/api/v1/badges/5193f97d-be1d-4953-967c-093aad0c8d28/deploy-status)](https://app.netlify.com/sites/gunn-elimination-2024/deploys)

The 2024 Elimination website is developed using the SUKIT tech stack (Supabase + SvelteKit). I'm not using Firebase cuz FKIT. Please open a pull request if you want to contribute.

## Getting Started

> [!IMPORTANT]
> You'll need some environment variables to connect to the database and develop locally. Contact [@ThePickleGawd](https://github.com/ThePickleGawd) if you'd like to contribute. Copy them into a new file called `.env` in the root directory.

See our [wiki!](https://github.com/gunn-elimination/elimination-2024/wiki)

See [Supabase API Docs](https://supabase.com/dashboard/project/yihigqyfdifpodmnguxr/api) for our project! (requires project access)

## Developing

Install Dependences

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

## Generating Types

If you update the database, please generate new types with the following command

```bash
npx supabase gen types typescript --project-id ncmbliadufcfbfdreyrq > src/database.types.ts
```

## Building

We have CI/CD setup with Netlify so that pushing to the main branch will build and deploy to the website.

## TODOs

- Update app.d.ts with correct types
- Loading indicators to make it feel responsive
#   E l i m i n a t i o n - 2 0 2 5  
 #   E l i m i n a t i o n - 2 0 2 5  
 #   E l i m i n a t i o n - 2 0 2 5  
 