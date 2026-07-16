const App = () => {
    return <div>
        <ol>
            <li>first one</li>
            <li>second one</li>
            <li>third one</li>
        </ol>
    </div>;
};

const About = () => {
    return <div>
        <h1>About Text</h1>
    </div>
}

export const Contact = () => { // named export
    return <div>
        <h1>Contact Text</h1>
    </div>
}

export default {
    App, About
}; // default export