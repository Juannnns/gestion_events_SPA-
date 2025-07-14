export default async function dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await fetch("http://localhost:3000/events");
    const events = await res.json();

    const eventsList = events.length
    ? events.map(e => `<li><strong>${e.title}</strong> - ${e.capacity} personas</li>`).join("")
    : "<li>Don't found events</li>";
    return `
        <h2>Dashboard</h2>
        <p>Bienvenido, ${user.email}</p>
        <p>Rol: ${user.role}</p>
        <button onclick="location.href='/create-event', history.pushState({}, '', '/create-event'); window.dispatchEvent(new Event('popstate'));">Create event</button>
        <button onclick="localStorage.clear(); location.href='/login';">Sign out</button>

        <h3>📅 Lista de eventos</h3>
        ul>${eventsList}</ul>

    `;
}