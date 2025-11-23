# 📌 Brand Sales Analytics Dashboard – Frontend (React)

## 🚀 Tech Stack

- React (Hooks)
- Axios
- Chart.js + react-chartjs-2
- CSS Flexbox

---

## 📁 Project Structure

```
frontend/
│ src/App.jsx
│ src/index.css
├─ src/components/
│   ├─ Filters.jsx
│   ├─ TilesRow.jsx
│   ├─ Tile.jsx
│   ├─ ChartSection.jsx
│   └─ TableSection.jsx
└ package.json
```

---

## 🔧 Setup

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start React App
```bash
npm start
```

Runs at:  
`http://localhost:5173`

---

## 🔗 Backend Connection

Axios calls backend here:
axios.get("http://localhost:4000/api/dashboard", { params });

