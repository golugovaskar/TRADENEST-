<h1 align="center">📊 TradeNest - Full-Stack Stock Trading & Networking Platform</h1>

<p align="center">
  A modern Zerodha-inspired trading platform where users can trade, network, and grow together.
  <br />
  Built with MERN Stack · JWT Auth · Cloudinary · Resume Generator · Clean UI
</p>

---

## 🚀 Live Demo

🔗 [Live Website](https://tradenest.onrender.com) (add actual link)

---

## ✨ Features

- 🔐 User authentication with **JWT**
- 👤 Profile creation and updates
- 📸 Upload profile picture using **Cloudinary**
- 📄 Upload and generate **PDF resume**
- 🧾 Dashboard with personalized data
- 🧑‍🤝‍🧑 Send, accept, view connection requests
- 📝 Create, delete, and like posts
- 💬 Add comments on posts
- 🎨 Responsive and modern UI using Tailwind CSS
- ⚙️ Protected routes and token-based login

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js
- 🌬️ Tailwind CSS
- 🔁 Redux Toolkit
- 🔐 Axios (with token-based headers)

### Backend
- 🟢 Node.js
- ⚙️ Express.js
- 🛢️ MongoDB + Mongoose
- 🖼️ Cloudinary (image uploads)
- 📄 PDFKit (resume generation)
- 🔒 JWT for authentication
- 🗂️ Multer for file handling

---

## 📁 Folder Structure

TRADENEST/
├── frontend/ # React frontend
├── backend/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── resumes/
│ └── user.controller.js, post.controller.js
├── dashboard/ # (Optional: admin or analytics panel)
└── README.md

yaml
Copy
Edit

---

## ⚙️ Environment Variables

Create a `.env` file inside `/backend`:

PORT=9090
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

yaml
Copy
Edit

---

## 🧪 How to Run Locally

### Backend

```bash
cd backend
npm install
npm start
Runs on: http://localhost:9090

Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
Runs on: http://localhost:5173

📸 Screenshots
(Add your own screenshots here)

✅ Login/Register page

✅ Dashboard

✅ Post creation

✅ Profile edit

✅ Resume download preview

🧠 Learning Highlights
How to handle authentication using JWT in full-stack apps

How to connect MongoDB Atlas with Express backend

Image upload using Cloudinary

Resume creation using PDFKit

Working with Redux Toolkit and private routes

Professional UI using Tailwind

📌 Future Improvements
⏱️ Real-time stock tracking using WebSockets / APIs

📈 Graphs and financial insights using Chart.js

🔎 Search & filter for users and posts

📬 Notification system

🙋‍♂️ About Me
Golu Kumar
📧 Email: prajaptigolu07@gmail.com
🔗 GitHub: @golugovaskar

⭐ Show Some Love
If you like this project, please consider giving it a ⭐ on GitHub. It really helps!

"Code. Build. Connect. Repeat." 💻🚀

markdown
Copy
Edit

---

### ✅ What you should do now:

1. Paste this `README.md` into your `TRADENEST-` repo.
2. Replace:
   - `Live Website` link with your actual deployed site.
   - Add some UI screenshots for better impression.
3. Let me know if you want:
   - A banner/header image with your name
   - Badges like `Made with MERN`, `Deployed on Render`
   - Dark/light theme toggle instructions

Ready for next README or profile polishing? 😎
