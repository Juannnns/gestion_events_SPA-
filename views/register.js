export default function Register() {
    return `
    <h2>Sign up</h2>
    <form id="registerForm">
        <input type="email" placeholder="Email" required name="email" />
        <input type="password" placeholder="Password" required name="password" />
        <select name="role">
            <option value="visitor">Visitor</option>
            <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign up</button>
    </form>
    <p>¿Do you have account? <p></p><a href="/login" onclick="event.preventDefault(); history.pushState({}, '', '/login'); window.dispatchEvent(new Event('popstate'));">Sign in</a></p>
    <script>
        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const user = {
                email: form.email.value,
                password: form.password.value,
                role: form.role.value
            };
            await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            alert('Registered user. Sign in.');
            history.pushState({}, '', '/login');
            window.dispatchEvent(new Event('popstate'));
        });
    </script>
    `;
}