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



AI GitHub Profile Explainer
This is a small web app built with Next.js that fetches live data from the GitHub public API and uses an AI (Groq LLM) to explain who the developer is in plain English.

How it works
The user types a GitHub username.
The Next.js backend calls the GitHub API to get live profile data.
The backend sends that data to the Groq AI API.
The AI returns a 3-sentence summary of the developer, which is shown on the page.
Tech Stack
Next.js (App Router)
Tailwind CSS
GitHub Public API
Groq AI (OpenAI SDK)
How to run locally
Clone the repo.
Run npm install.
Create a .env.local file and add your Groq API key: GROQ_API_KEY=your_key_here
Run npm run dev and open http://localhost:3000.
Save the file. Then push it to GitHub:

bash

git add .
git commit -m "M4: Add README"
git push
