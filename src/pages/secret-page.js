import { withIronSession } from 'next-iron-session';

// Wrap getServerSideProps with withIronSession
const withSession = (handler) => {
    return withIronSession(handler, {
        password: 'aytoeinaitogamhmenopasswordgiatoironsession',
        cookieName: 'iron-session/examples/next',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
        },
    });
};

export default function SecretPage(props) {

    return <h1>Hello {props.name}</h1>
}

// Original getServerSideProps function
export async function getServerSideProps(context) {
    const session = context.req.session;

    // Rest of your code

    return {
        props: {
            name: session.name
        },
    };
}
