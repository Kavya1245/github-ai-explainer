// This function takes raw GitHub data and formats it safely
export function formatGithubData(rawData: any) {
  return {
    name: rawData.name || "Unknown Name",
    bio: rawData.bio || "No bio available",
    publicRepos: rawData.public_repos || 0,
    followers: rawData.followers || 0,
    avatar: rawData.avatar_url || ""
  };
}