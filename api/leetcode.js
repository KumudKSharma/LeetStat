export default async function handler(req, res) {
  const response = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Referer": "https://leetcode.com" },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.status(200).json(data);
}