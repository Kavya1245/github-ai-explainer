import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  try {
    // 1. Get the username the user typed
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    // 2. Fetch live data from GitHub API
    const githubRes = await fetch(`https://api.github.com/users/${username}`);
    const githubData = await githubRes.json();

    if (githubData.message === "Not Found") {
      return NextResponse.json({ error: "GitHub user not found" }, { status: 404 });
    }

    // 3. Initialize Groq AI client (Free API!)
    const client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    // 4. Ask the AI to turn raw GitHub data into a friendly summary
    const aiResponse = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Groq's fast, free model
      messages: [
        {
          role: "system",
          content: "You are a friendly tech recruiter. Explain who this GitHub developer is in 3 short, fun sentences based on their profile data. Mention their name, company, public repos, and followers if available."
        },
        {
          role: "user",
          content: `Here is the GitHub data for ${username}: ${JSON.stringify(githubData)}`
        }
      ],
    });

    const explanation = aiResponse.choices[0].message.content;

    // 5. Send the AI's answer back to the user
    return NextResponse.json({ 
      rawGitHubData: {
        name: githubData.name,
        bio: githubData.bio,
        publicRepos: githubData.public_repos,
        followers: githubData.followers,
        avatar: githubData.avatar_url
      },
      aiExplanation: explanation
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}