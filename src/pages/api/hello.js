export default function handler(req, res) {
  // Set the custom cookie
  req.session = {}
  res.setHeader('Set-Cookie', 'nikoscookie=vanillaCookie; Path=/');

  // Redirect to "/test-page"
  res.redirect("/api/world");
}
