This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Sanity CMS

1st step - Go to Sanity CMS and create a project there

By creating a project there you will be redirected to a page where you will have a code to run in the Next.js project

Ex: npm create sanity@latest -- --project fmd449xt --dataset production --template clean --typescript --output-path studio-cyber-shopr

By running this code a sanity folder will be created at the root level. 

Obs: If you run into errors just use the code npm i next-sanity@latest --legacy-peer-deps

2nd step - Access - http://localhost:3000/studio

And there you will be able to create values for fetching later on

## Clerk

Installation:

1st step

npm install @clerk/nextjs

In case there are errors appearing due to the fact that we are using Next.js 15 and it uses React 19 then we need to use the following command:

npm install @clerk/nextjs --legacy-peer-deps

2nd step

copy the env variables values and paste it in the .env.local

3rd step - Create the middleware with the code already provided by Clerk

Create the file at root level and name it middleware.ts and paste the code and that is it.

4th step - Add the provider to our app

And now we suggest you follow another documentation: https://clerk.com/changelog/2024-10-22-clerk-nextjs-v6

Because we have to add the dynamic prop to ClerkProvider.

And we go to the layout file and wrap it with our provider and pass the dynamic prop
