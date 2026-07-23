import { NextResponse } from "next/server";

export async function GET() {
  // 1. Fetch live data from the GitHub API
  const res = await fetch("https://api.github.com/users/torvalds");
  
  // 2. Convert the response to JSON
  const data = await res.json();

  // 3. Print it to your terminal so you can see it
  console.log("Fetched GitHub Data:", data.login, data.public_repos);

  // 4. Send it back to the browser
  return NextResponse.json({ 
    message: "Success! Check your terminal.",
    username: data.login,
    name: data.name,
    publicRepos: data.public_repos
  });
}