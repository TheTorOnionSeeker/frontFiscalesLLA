'use client'

export default function Form() {
    let location, name, dni;

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.clear();
        localStorage.setItem('name', name);
        localStorage.setItem('location', location);
    }

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                Nombre y Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    placeholder="Ingrese Nombre y Apellido"
                                    onChange={(e) => name = e.target.value}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="dni" className="block text-sm font-medium leading-6 text-white">
                                DNI
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="dni"
                                    id="dni"
                                    autoComplete="given-dni"
                                    placeholder="Ingrese DNI"
                                    onChange={(e) => dni = e.target.value}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={name}
                                onChange={(e) => name = e.target.value}
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Ubicación"
                                value={location}
                                onChange={(e) => location = e.target.value}
                            />
                            <button type="submit">Enviar</button>
                        </form> */}
                    </div>
                </div>
            </main>
        </>
    )
}