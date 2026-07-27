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
Save the file. 

Then push it to GitHub:

bash

git add .

git commit -m "M4: Add README"

git push
