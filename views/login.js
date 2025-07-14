export default function Login() {
  return `
    <h2>Login</h2>
    <form id="loginForm">
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Contraseña" name="password" required />
      <button type="submit">Ingresar</button>
    </form>
    <p>
      ¿Do you have an account? 
      <a href="/register" onclick="event.preventDefault(); history.pushState({}, '', '/register'); window.dispatchEvent(new Event('popstate'));">Sign in</a>
    </p>
    <script>
      document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Form sent");

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const res = await fetch('http://localhost:3000/users');
            const users = await res.json();

            const user = users.find(u => u.email === email && u.password === password);
            console.log("User  found");
        
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                console.log("Redirect to dashboard");
                history.pushState({}, '', '/dashboard');
                window.dispatchEvent(new Event('popstate'));
            } else {
                alert('Invalid credentials');
            }
        } catch (err) {
            console.error("Error in the petition:", err);
        }  
      });
    </script>
  `;
}