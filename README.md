📌 Brand Sales Analytics Dashboard (MERN Stack)

A complete Sales Analytics Dashboard built using the MERN stack.
The application analyzes brand performance across products (Shoe models)

✔ Total Sales
✔ Advertising Cost
✔ Impressions
✔ Clicks
✔ Line Chart for trends
✔ Table summarizing each product

🚀 Tech Stack
Layer	Technology
Frontend	React (Hooks), Axios, Chart.js, CSS
Backend	Node.js, Express.js, MongoDB, Mongoose
Database	MongoDB Atlas
Environment Manage	dotenv
Communication	REST API (JSON)
📂 Project Structure (Monorepo)
brand-sales-dashboard/
│ README.md (this file)
│
├─ backend/                 # Backend (Node.js / Express)
│   ├─ index.js
│   ├─ .env
│   ├─ package.json
│   ├─ config/
│   │    └─ db.js
│   ├─ models/
│   │    └─ ShoeStat.js
│   └─ routes/
│        ├─ dashboard.js
│        └─ seed.js
│
└─ frontend/                # Frontend (React)
    ├─ src/App.jsx
    ├─ src/index.css
    ├─ src/components/
    │     ├─ Filters.jsx
    │     ├─ TilesRow.jsx
    │     ├─ Tile.jsx
    │     ├─ ChartSection.jsx
    │     └─ TableSection.jsx
    └─ package.json

🏁 Setup Instructions
▶️ 1 — Backend Setup
cd backend
npm install


Create .env inside backend/:

PORT=4000
MONGO_URI=mongodb+srv://saksamguptabgmi4:<password>@cluster0saksham.76ghyhz.mongodb.net/brnad-sales?appName=Cluster0Saksham


Run backend:

npm run dev

Backend will start on:

http://localhost:4000

▶️ 2 — Frontend Setup

Open new terminal:

cd frontend
npm install

Start React app:

npm start

Frontend will run on:

http://localhost:5173

🔗 Backend Connection in Frontend

Axios requests in frontend communicate with the backend using:

axios.get("http://localhost:4000/api/dashboard", { params });