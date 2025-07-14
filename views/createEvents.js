export default function createEvent() {
    return `
    <h2>Crate a new event</h2>
    <form id="createEventForm">
        <input type="text" name="title" placeholder="Title of the event" required />
        <input type="number" name="capacity" placeholder="Capacity" required />
        <button type="submit">Create event</button>
    </form>
        <button onclick="history.back()">Back</button>

    <script>
        document.getElementById('createEventForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const newEvent = {
                title: form.title.value,
                capacity: parseInt(form.capacity.value),
                attendees: []
            };
            await fetch('http://localhost:3000/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event)
            });
            
            alert('created event');
            history.pushState({}, '', '/dashboard');
            window.dispatchEvent (new Event ('popsate'))
        })
    </script>
    `;
}
console.log("evebt")