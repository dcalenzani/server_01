import { Phone } from "react-feather";
import { Mail } from "react-feather";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/51971192536?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");

    // Clear form inputs
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-zinc-300 dark:bg-zinc-950 text-inherit dark:text-slate-50">
      <div className="flex flex-col items-center justify-center">
        
        <div id="HomePseudoButton" className="fixed pl-2 left-0 top-0 flex w-full justify-center border-t border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-transparent lg:p-4 lg:dark:hover:bg-zinc-800/30">
          <a href="/">
            &#8962; Home
          </a> 
        </div>

        <span className="relative top-20 text-center items-center justify-center ml-10 mr-10">
          Thanks for reaching me! You can leave your name, e-mail, and a message for me. Fill the form above for contact. I hope you are not too uncomfortable with Meta and Whatsapp
        </span>
        <form
          className="form"
          style={{
            width: "340px",
            height: "440px",
            background: "#e6e6e6",
            borderRadius: "8px",
            boxShadow: "0 0 40px -10px #000",
            margin: "calc(50vh - 220px) auto",
            padding: "20px 30px",
            maxWidth: "calc(100vw - 40px)",
            boxSizing: "border-box",
            fontFamily: "'Montserrat', sans-serif",
            position: "relative",
          }}
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-2xl pb-3 w-44 text-gray-700 border-b-2 border-gray-700">
            CONTACT ME
          </h2>
          <p className="mt-4">
            <input
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full p-2 bg-transparent outline-none resize-none border-0 font-sans transition-all duration-300 border-b-2 border-gray-300"
            />
          </p>
          <p className="mt-4">
            <input
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-2 bg-transparent outline-none resize-none border-0 font-sans transition-all duration-300 border-b-2 border-gray-300"
            />
          </p>
          <p className="mt-4">
            <input
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full p-2 bg-transparent outline-none resize-none border-0 font-sans transition-all duration-300 border-b-2 border-gray-300"
            />
          </p>
          <a
            href={`https://wa.me/51971192413?text=${encodeURIComponent(
              `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="float-right py-2 px-4 mt-4 border-2 border-gray-700 text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-300"
          >
            Send Message
          </a>
        <div className="absolute bottom-5 -right-10 bg-gray-800 text-white w-64 p-4 rounded text-sm shadow-md">
          <div className="flex items-center">
            <Phone className="mb-2 mr-3 ml-3" />
            <span>+51 971 192 536</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-3 ml-3" />
            <span>dcalenzani@pucp.edu.pe</span>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
