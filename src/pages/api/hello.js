// pages/api/updateSession.js
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';


async function handler(req, res) {
  req.session.name = "MICALIS";
  await req.session.save();

  // res.status(200).json({ message: "Session name updated to Kwstas" });
  res.redirect("/api/world")
}


export default withIronSessionApiRoute(handler, {
  cookieName: 'iron-session/examples/next',
  password: "aytoeinaitogamhmenopasswordgiatoironsession",
  cookieOptions: {
    secure: false,
  },
})