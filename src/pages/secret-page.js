
export default function SecretPage(props) {

    return <h1>Hello {props.name}</h1>
}

// Original getServerSideProps function
export async function getServerSideProps(context) {
    const session = context.req.session;

    return {
        props: {
            name: session.name
        },
    };
}
