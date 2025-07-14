import Login from "./views/login.js";
import Register from "./views/register.js";
import Dashboard from "./views/dashboard.js";
import CreateEvent from "./views/createEvents.js";
import EditEvent from "./views/editEvent.js";
import NotFound from "./views/notFound.js";

const routes = {
  "/login": Login,
  "/register": Register,
  "/dashboard": Dashboard,
  "/create-event": CreateEvent,
  "/edit-event": EditEvent,
};

export default async function renderView() {
  const path = location.pathname;
  const view = routes[path] || NotFound;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user && path !== "/login" && path !== "/register") {
    history.pushState({}, '', '/login');
    document.getElementById("app").innerHTML = await Login();
    return;
  }

  if (user && (path === "/login" || path === "/register")) {
    history.pushState({}, '', '/dashboard');
    document.getElementById("app").innerHTML = await Dashboard();
    return;
  }

  document.getElementById("app").innerHTML = await view();
}