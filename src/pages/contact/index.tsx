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
    const whatsappUrl = `https://wa.me/51971192413?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");

    // Clear form inputs
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <span className="flex text-center items-center justify-center m-10">
          Thanks for reaching me! You can leave your name, e-mail, and a message for me. Fill the form below for contact. I hope you are not too uncomfortable with Meta and Whatsapp
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
          <h2
            style={{
              margin: "10px 0",
              paddingBottom: "10px",
              width: "180px",
              color: "#78788c",
              borderBottom: "3px solid #78788c",
            }}
          >
            CONTACT ME
          </h2>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: "14px",
              color: "#5a5a5a",
            }}
          >
            <input
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                background: "none",
                outline: "none",
                resize: "none",
                border: "0",
                fontFamily: "'Montserrat', sans-serif",
                transition: "all .3s",
                borderBottom: "2px solid #bebed2",
              }}
            />
          </p>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: "14px",
              color: "#5a5a5a",
            }}
          >
            <input
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                background: "none",
                outline: "none",
                resize: "none",
                border: "0",
                fontFamily: "'Montserrat', sans-serif",
                transition: "all .3s",
                borderBottom: "2px solid #bebed2",
              }}
            />
          </p>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: "14px",
              color: "#5a5a5a",
            }}
          >
            <input
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                background: "none",
                outline: "none",
                resize: "none",
                border: "0",
                fontFamily: "'Montserrat', sans-serif",
                transition: "all .3s",
                borderBottom: "2px solid #bebed2",
              }}
            />
          </p>
          <button
            style={{
              float: "right",
              padding: "8px 12px",
              margin: "8px 0 0",
              fontFamily: "'Montserrat', sans-serif",
              border: "2px solid #78788c",
              background: "0",
              color: "#5a5a6e",
              cursor: "pointer",
              transition: "all .3s",
              textDecoration: "none",
            }}
            onClick={() => {
              const text = `Nombre: ${name}\nEmail: ${email}\n Mensaje: ${message}`;
              const whatsappUrl = `https://wa.me/51971192536?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            Send Message
          </button>
          <div
            style={{
              position: "absolute",
              top: "-70px",
              right: "-100px",
              background: "#50505a",
              color: "#fff",
              width: "280px",
              padding: "16px 4px 16px 0",
              borderRadius: "6px",
              fontSize: "13px",
              boxShadow: "10px 10px 40px -14px #000",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Phone
                style={{ marginBottom: "10px", marginRight: "15px", marginLeft: "15px" }}
              />
              <span>+51 971 192 536</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Mail style={{ marginRight: "15px", marginLeft: "15px" }} />
              <span>dcalenzani@pucp.edu.pe</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
