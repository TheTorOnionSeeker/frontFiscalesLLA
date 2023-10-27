'use client'

export default function Form() {
    let location, name;

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.clear();
        localStorage.setItem('name', name);
        localStorage.setItem('location', location);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => name=e.target.value}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Ubicación"
                    value={location}
                    onChange={(e) => location=e.target.value}
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}