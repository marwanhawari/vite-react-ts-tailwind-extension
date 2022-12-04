import { useEffect, useState, useCallback } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

export default function App() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div className="App mt-4 flex flex-col items-center gap-8">
            <div className="flex flex-row items-center justify-center gap-4 border-4 border-blue-500 p-4">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="font-bold">Vite + React</h1>
            <div className="flex flex-col items-center">
                <button onClick={handleClick}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}
