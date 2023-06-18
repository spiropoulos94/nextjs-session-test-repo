// pages/api/updateSession.js

export default async function handler(req, res) {
  req.session.name = "MICALIS";
  await req.session.save();

  // res.status(200).json({ message: "Session name updated to Kwstas" });
  res.redirect("/api/world")
}
