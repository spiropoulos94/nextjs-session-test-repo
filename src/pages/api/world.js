
export default async function handler(req, res) {
  const name = req.session.name || "Unknown";

  req.session.name = name + "O magkas";
  await req.session.save();

  // res.status(200).json({ name });
  res.redirect("/secret-page")
}