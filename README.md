# 🖥 Internship Test — Frontend

A responsive React + TypeScript single-page application built as part of an internship technical assignment. The app features a public main page with a deals listing and consultation form, plus a full authentication flow (login / sign up) with a dynamic header that adapts based on the user's session.

---

## 🔗 Related

- **Frontend repository:** https://github.com/Ihor4yk/internship-test-frontend
- **Live demo:** https://internship-test-frontend-smoky.vercel.app/

---

## ✨ Features

- **Main page** — Hero section, deals grid with image modal, and a consultation application form
- **Authentication** — Login and Sign Up pages with client-side validation
- **Dynamic header** — Login/Sign Up buttons are replaced by the user's email + Logout button after authentication
- **Redux state management** — Auth, Deals, and Applications each have their own slice
- **JWT persistence** — Token and user are stored in `localStorage` and restored on page refresh
- **File upload** — Application form supports image attachments (JPEG, PNG, WebP, max 5 MB) with live preview
- **Form validation** — Powered by `react-hook-form` + `yup` with inline error messages and `onBlur` mode
- **Fully responsive** — Mobile-first CSS Modules layout

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build tool | Vite 7 (SWC) |
| State management | Redux Toolkit + React Redux |
| Routing | React Router DOM v7 |
| Forms | React Hook Form + Yup |
| HTTP client | Axios (with request interceptor) |
| Styling | CSS Modules + `modern-normalize` |
| Linting | ESLint + Prettier |

---

## 📋 Prerequisites

- Node.js v18+
- npm v9+

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ihor4yk/internship-test-frontend.git
cd internship-test-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API base URL

The API base URL is set in `src/api/axiosInstance.ts`:

```ts
// Production (deployed backend)
const BASE_URL = "https://internship-test-backend-cou0.onrender.com/api";

// Local development — uncomment to use:
// const BASE_URL = "http://localhost:5000/api";
```

Switch the comment to use your local backend during development.

### 4. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📦 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 📁 Project Structure

```
src/
├── api/
│   └── axiosInstance.ts         # Axios client with JWT interceptor
├── app/
│   └── store.ts                 # Redux store (auth, deals, applications)
├── assets/
│   └── images/                  # Static images (hero, auth background)
├── components/
│   ├── ApplicationForm/         # Consultation request form with file upload
│   ├── DealCard/                # Single deal card with overlay stats
│   ├── DealsList/               # Deals grid + image modal
│   ├── Header/                  # Responsive header, auth-aware nav
│   ├── Hero/                    # Landing hero section
│   └── Layout/                  # Shared page layout wrapper (Outlet)
├── features/
│   ├── auth/
│   │   ├── authAPI.ts           # login / register API calls
│   │   ├── authSlice.ts         # Auth state, async thunks, logout action
│   │   ├── authTypes.ts         # TypeScript interfaces
│   │   └── validationSchema.ts  # Yup schemas for login & register
│   ├── applications/
│   │   ├── applicationAPI.ts    # Submit application (multipart/form-data)
│   │   ├── applicationSlice.ts  # Submission state & thunk
│   │   ├── applicationSchema.ts # Yup schema with file validation
│   │   └── applicationTypes.ts  # TypeScript interfaces
│   └── deals/
│       ├── dealsAPI.ts          # Fetch deals list
│       ├── dealsSlice.ts        # Deals state & thunk
│       └── dealTypes.ts         # TypeScript interfaces
├── pages/
│   ├── MainPage/
│   │   └── MainPage.tsx         # Composes Hero + DealsList + ApplicationForm
│   └── authPages/
│       ├── LoginPage.tsx
│       ├── SignUpPage.tsx
│       └── auth.module.css
├── routes/
│   └── AppRoutes.tsx            # BrowserRouter with Layout wrapper
├── styles/
│   ├── fonts.css
│   └── globals.css
├── App.tsx
├── main.tsx
└── declarations.d.ts
```

---

## 🔐 Authentication Flow

1. User submits credentials on `/login` or `/signup`
2. The Redux thunk calls the API and receives a `{ token, user }` response
3. Both are saved to `localStorage` and to Redux state (`isAuthenticated: true`)
4. The `Header` component reads `isAuthenticated` from the store and replaces the Log In / Sign Up links with the user's email and a Logout button
5. On logout, `localStorage` is cleared and the state resets
6. On page refresh, the initial Redux state is rehydrated from `localStorage`, so the session persists

---

## 📡 API Integration

All requests go through `axiosInstance`, which automatically attaches the JWT from `localStorage` to every request:

```ts
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Endpoints used

| Feature | Method | Endpoint |
|---|---|---|
| Login | `POST` | `/auth/login` |
| Register | `POST` | `/auth/register` |
| Fetch deals | `GET` | `/deals` |
| Submit application | `POST` | `/applications` |

---

## 📄 Pages & Routes

| Path | Component | Auth required |
|---|---|---|
| `/` | `MainPage` | ❌ |
| `/login` | `LoginPage` | ❌ |
| `/signup` | `SignUpPage` | ❌ |

All routes share the `Layout` component, which renders the `Header` and an `Outlet` for page content.

---

## 🗂 Redux Store

```
store
├── auth
│   ├── user: { id, email } | null
│   ├── token: string | null
│   ├── isAuthenticated: boolean
│   ├── loading: boolean
│   └── error: string | null
├── deals
│   ├── deals: Deal[]
│   ├── loading: boolean
│   └── error: string | null
└── applications
    ├── loading: boolean
    ├── error: string | null
    └── success: boolean
```

---

## 🌐 Deployment

The project can be deployed as a static site to any hosting platform (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
# Output will be in the /dist directory
```

> **Note:** When deploying, make sure the production `BASE_URL` in `axiosInstance.ts` points to your live backend. For SPAs with client-side routing, configure your host to redirect all requests to `index.html`.
