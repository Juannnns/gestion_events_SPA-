# Event Manager SPA

SPA for event manager with authentication, CRUD y json-server.

## 👨‍💻 Coder
- **Name:** Juan José Barrios
- **Clan:** Tayrona
- **Email:** juanbarrios0956@gmail.com
- **ID:** 1044217596

## ⚙️ prerequisites

1. have installed **Node.js** and **npm**
   - Download from: https://nodejs.org/es

2. Download **json-server**

```bash
npm install -g json-server
```

## 🚀 How to run the project

### 1. Clone or download this repository

```bash
git clone https://github.com/Juannnns/gestion_events_SPA-.git
cd gestion_events_SPA-
```

### 2. Start the JSON Server

```bash
json-server --watch db.json --port 3000
```

This exposes the API in:

- `http://localhost:3000/users`
- `http://localhost:3000/events`

### 3. Start the lite-server
```bash
npm start
```

### 4. Open the app in the browser

- Recommended: Use **Live Server** in VSCode
- Or open `index.html` directly with double click

⚠️ Use Live Server so that routes like`/dashboard` don't give 404

## 🧪 Default users

### 👑 Admin

```json
{
  "email": "admin@eventos.com",
  "password": "admin123",
  "role": "admin"
}
```

### 🙋‍♂️ Visitor

- We can sign up from `/register`
- Take you rol `visitor`

## 📂 Estructure of the project

```
event-manager-spa/
├── index.html
├── styles.css
├── main.js
├── router.js
├── auth.js
├── api.js
├── db.json
├── views/
│   ├── Login.js
│   ├── register.js
│   ├── dashboard.js
│   ├── createEvent.js
│   ├── editEvent.js
│   └── notFound.js
```
