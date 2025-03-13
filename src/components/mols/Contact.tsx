"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const sendEmailForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://personal-api-sender-email.vercel.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            subject,
            message,
            phone,
            name,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setStatus("success");
        // Reset form
        setEmail("");
        setSubject("");
        setMessage("");
        setPhone("");
        setName("");
        alert("Email enviado com sucesso!");
      } else {
        setStatus("error");
        alert(data.error || "Erro ao enviar email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      alert("Erro ao enviar email");
    } finally {
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="max-w-[77.5rem] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#3ddb80]">
          Contato
        </p>
        <h2 className="py-4">Vamos tomar um café ?</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src="/../assets/background.jpg"
                  alt="computador em uma mesa"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2 text-gray-700">Gabriel Rodrigues</h2>
                <p className="py-2 text-gray-700">Desenvolvedor Fullstack</p>
                <p className="py-4">
                  Estou disponivel para freelances ou CLT. <br />
                  Entre em contato comigo e vamos conversar
                </p>
              </div>
              <div>
                <div className="flex justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="linkedin"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="https://www.linkedin.com/in/gabriel442021/"
                    >
                      <FaLinkedinIn
                        size={25}
                        href="https://www.linkedin.com/in/gabriel442021/"
                      />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="github"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="https://www.github.com/Gabriel4420"
                    >
                      <FaGithub size={25} />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="email"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="mailto:gabriel_rodrigues_perez@hotmail.com"
                    >
                      <AiOutlineMail
                        size={25}
                        href="mailto:gabriel_rodrigues_perez@hotmail.com"
                      />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="linktree"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="https://linktr.ee/gabriel4420"
                    >
                      <BsFillPersonLinesFill
                        size={25}
                        href="https://linktr.ee/gabriel4420"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendEmailForm}>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Digite seu nome completo"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      placeholder="Digite seu telefone"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Digite o assunto"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Insira sua mensagem"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    required
                  ></textarea>
                </div>
                <button
                  className="bg-[#3ddb80] w-1/2 p-4 text-white font-bold rounded-lg mt-4 hover:bg-[#3ddb80] disabled:opacity-50"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Enviando..."
                    : status === "success"
                    ? "Enviado!"
                    : status === "error"
                    ? "Erro ao enviar"
                    : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="">
            <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#3ddb80]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
