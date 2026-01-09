Tech Stack

Frontend:
React.js (for components and UI)
Next.js (for SSR on dynamic pages like products)
React Router (for navigation)
Redux (for state management, e.g., cart)
Bootstrap (for responsive design)
Font Awesome (for icons)
React Hot Toast (for notifications)
React Loading Skeleton (for loading states)
React Fast Marquee (for carousels)

Backend:
Node.js (runtime)
Express.js (web framework for APIs)
MongoDB or SQLite (database for users/orders; configurable)

Other:
JavaScript (core language)
Axios/Fetch (for API calls)
FakeStore API (demo product data)
Custom CSS (theming with #1B5E7F blue, Times New Roman font)


Prerequisites

Node.js (v14+)
npm or yarn
MongoDB (if using for backend persistence)

Installation

Clone the Repository:textgit clone https://github.com/your-username/e-commerce-platform.git
cd e-commerce-platform
Install Dependencies:
For Frontend (React/Next.js):textcd frontend
npm install
For Backend (Node.js/Express):textcd backend
npm install

Set Up Environment Variables:
Create .env files in both frontend and backend folders.
Frontend example:textREACT_APP_API_URL=http://localhost:5000/api
Backend example:textPORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce

Run the App:
Start Backend:textcd backend
npm start
Start Frontend:textcd frontend
npm run dev  # For Next.js dev mode
# or npm start for pure React

Access the App:
Open http://localhost:3000 in your browser.
