export default function SecretPage(props) {

    console.log({ props })

    return <h1>SECRET PAGE</h1>
}

export async function getServerSideProps(context) {
    // Fetch data or perform any server-side operations here
    return {
        props: {
            name: "Niko"
        }, // Add any data you want to pass as props to the component
    };
}