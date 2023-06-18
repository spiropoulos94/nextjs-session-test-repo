import { withIronSessionApiRoute } from 'iron-session/next';


async function handler(req, res) {
  const name = req.session.name || "Unknown";

  // req.session.name = name + " O magkas";
  // await req.session.save();

  // res.status(200).json({ name });
  // res.redirect("/secret-page")
  res.status(200).json({ data: "ok", name });
}


export default withIronSessionApiRoute(handler, {
  cookieName: 'iron-session/examples/next',
  password: "aytoeinaitogamhmenopasswordgiatoironsession",
  cookieOptions: {
    secure: false,
  },
})