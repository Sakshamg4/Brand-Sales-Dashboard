# 📌 Brand Sales Analytics Dashboard – Backend (Node.js / Express / MongoDB)

This backend provides API endpoints for the **Brand Sales Analytics Dashboard** project.  
It aggregates shoe sales data by date range, shoe selection, and metrics selection, and returns data for:

✔ Summary Tiles  
✔ Line Chart  
✔ Table (Totals per Shoe)  
✔ Grand Totals  

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- dotenv

---

## 📁 Project Structure
```
backend/
│ index.js
│ .env
│ package.json
├─ config/
│   └─ db.js
├─ models/
│   └─ ShoeStat.js
└─ routes/
    ├─ dashboard.js
    └─ seed.js
```

---

## 🔧 Setup

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Configure database
Create `.env` file:
```
PORT=4000
MONGO_URI=mongodb+srv://saksamguptabgmi4:<password>@cluster0saksham.76ghyhz.mongodb.net/brnad-sales?appName=Cluster0Saksham
```

### 3️⃣ Start the server
```bash
npm run dev
```

Server runs at:  
`http://localhost:4000`

