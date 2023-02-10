import logo from './logo.svg';

export default function Home() {
    return (
        <div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                // style={{border: "2px solid red"}}
                >
                    Learn React
                </a>
            </div>
        </div>
    )
}