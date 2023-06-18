// Another endpoint handler for "/api/world"
export default function worldHandler(req, res) {
  // Read the cookie
  const cookie = req.headers.cookie;

  console.log("REQ SESSON MESA STO WORLD")

  console.log(req.session.name)
  console.log(req.session.name)
  console.log(req.session.name)
  console.log(req.session.name)
  console.log(req.session.name)
  console.log(req.session.name)
  console.log(req.session.name)

  // Do something with the cookie value
  console.log("Cookie:", cookie);
  console.log("NAME:", req.session.name);

  // Send a response
  // res.status(200).json({ message: "Cookie received" });
  res.redirect("/secret-page")
}
