import { withIronSession } from "next-iron-session";

export const sessionOptions = {
  password: 'aytoeinaitogamhmenopasswordgiatoironsession',
  cookieName: 'iron-session/examples/next',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

const withSession = (handler) => withIronSession(handler, sessionOptions);


async function handler(req, res) {
  // Set the custom cookie
  res.setHeader('Set-Cookie', 'nikoscookie=vanillaCookie; Path=/');

  req.session.name = "kwstaras"
  await req.session.save(); // Save the session after making changes

  // Redirect to "/test-page"
  res.redirect("/api/world");
}


export default withSession(handler)