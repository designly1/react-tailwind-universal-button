import { useState } from "react";

import Button from "./components/button";

export default function App() {
  const [displayText, setDisplayText] = useState("Choose your button wisely!");

  return (
    <>
      <main className="flex flex-col justify-center items-center bg-zinc-900 h-screen text-gray-50">
        <img
          src="https://cdn.designly.biz/images/designly-logo-trans.svg"
          alt="Designly Logo"
          className="mb-6 w-96"
        />
        <h1 className="mb-6 font-bold text-2xl">
          React + Tailwind CSS - Universal Button Demo
        </h1>
        <p className="mb-6 text-gray-500 text-xl">{displayText}</p>
        <div className="gap-6 grid md:grid-cols-4 grild-cols-2">
          <Button
            type="button"
            title="Default Button"
            onClick={() => {
              setDisplayText("Default Button, a safe choice!");
            }}
          >
            Default Button
          </Button>
          <Button
            type="button"
            className="bg-red-500"
            title="Red Button"
            onClick={() => {
              setDisplayText("Red Button, a risky choice!");
            }}
          >
            Red Button
          </Button>
          <Button
            type="button"
            className="bg-green-600"
            title="Green Button"
            onClick={() => {
              setDisplayText("Green Button, NO NOT THAT ONE!");
            }}
          >
            Green Button
          </Button>
          <Button
            type="a"
            className="bg-indigo-500"
            title="Link Button"
            href="https://blog.designly.biz"
            target="_blank"
            onClick={() => {
              setDisplayText("Link Button, it's a link and a button!");
            }}
          >
            Link Button
          </Button>
        </div>
      </main>
    </>
  );
}
