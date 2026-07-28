import { formatGithubData } from "../app/utils";

describe("formatGithubData", () => {
  
  // Test 1: Does it work with perfect data?
  it("should correctly format a complete GitHub user object", () => {
    // 1. Arrange (Fake Data)
    const mockRawData = {
      name: "Kavya",
      bio: "Software Engineer",
      public_repos: 17,
      followers: 5,
      avatar_url: "https://example.com/image.png"
    };

    // 2. Act (Run the function)
    const result = formatGithubData(mockRawData);

    // 3. Assert (Check if it did what we expect)
    expect(result.name).toBe("Kavya");
    expect(result.publicRepos).toBe(17);
    expect(result.avatar).toBe("https://example.com/image.png");
  });

  // Test 2: Does it handle missing data safely?
  it("should use default values if GitHub data is missing", () => {
    // Fake data with missing fields
    const mockRawData = {
      name: "John Doe"
      // bio, public_repos, followers, avatar_url are all missing!
    };

    const result = formatGithubData(mockRawData);

    expect(result.name).toBe("John Doe");
    expect(result.bio).toBe("No bio available"); // Should fall back to default
    expect(result.publicRepos).toBe(0);          // Should fall back to 0
  });
});