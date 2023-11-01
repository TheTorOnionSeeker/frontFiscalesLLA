import React, { useState } from "react";

export default function FormCargaInfoFiscales() {
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("Obera"); // Valor predeterminado

  function cleanLocalStorage() {
    localStorage.clear();
  }

  function handleSubmit(e) {
    cleanLocalStorage();
    e.preventDefault();
    localStorage.clear();
    localStorage.setItem("name", name);
    localStorage.setItem("dni", dni);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("location", location);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-14">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 bg-gray-900">
            <div className="bg-gray-900 border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Nombre y Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      autoComplete="given-name"
                      placeholder="Ingrese Nombre y Apellido"
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="dni"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    DNI
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="dni"
                      id="dni"
                      value={dni}
                      autoComplete="given-dni"
                      placeholder="Ingrese DNI"
                      onChange={(e) => setDni(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      autoComplete="email"
                      placeholder="Ingrese Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    N° de celular para Whatsapp
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={phone}
                      autoComplete="given-phone"
                      placeholder="Ingrese N° de celular"
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Localidad donde vota
                  </label>
                  <div className="mt-2">
                    <select
                      id="city"
                      name="city"
                      value={location}
                      autoComplete="city-name"
                      onChange={(e) => setLocation(e.target.value)} // Actualiza la variable location
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>seleccione</option>
                      <option>Obera</option>
                      <option>Posadas</option>
                      <option>Eldorado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cargar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
