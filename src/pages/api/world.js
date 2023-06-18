// Another endpoint handler for "/api/world"
export default function worldHandler(req, res) {
  // Read the cookie
  const cookie = req.headers.cookie;

  // Do something with the cookie value
  console.log("Cookie:", cookie);

  // Send a response
  res.status(200).json({ message: "Cookie received" });
}
