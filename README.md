# 📊 React + Vite test Admin Dashboard

A lightweight admin dashboard built with **React** and **Vite**, featuring theme switching, metric cards, a user table, and a settings form. Includes responsive layout and smooth dark mode handling.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/your-project.git

# Navigate into the project directory
cd your-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── loader/
│   ├── metric-cards/
│   ├── navigation/
│   ├── settings-form/
│   ├── users-table/
│   └── ui/                # shadcn/ui components
│
├── constants/             # Static data and routes
├── context/               # ThemeContext for global theme handling
├── hooks/                 # Custom hooks
├── layout/                # Main layout wrapper
├── lib/                   # Utility functions
├── pages/                 # Main pages: Overview, Users, Settings
├── providers/             # ThemeProvider
├── types/                 # TypeScript type definitions
│
├── App.tsx                # Root component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

---

## 🔀 Routing

Routing is implemented using **declarative React Router** via `react-router-dom`. Since the project is relatively small, a simple route setup was sufficient.

Default navigation redirects users from `/` to `/overview`, as no dedicated landing page is present.

```tsx
<Route path="/" element={<Navigate to="/overview" replace />} />
<Route path="/overview" element={<Overview />} />
<Route path="/users" element={<Users />} />
<Route path="/settings" element={<Settings />} />
<Route path="*" element={<NotFound />} />
```

---

## 🧠 State Management

Global state is handled via **React Context API**:

* `ThemeContext` manages light/dark mode.
* `ThemeProvider` toggles the `dark` class on the `<html>` element and syncs with `localStorage`.

---

## 💡 Preventing Theme Flash on Load

To avoid a flash of incorrect theme on page load, a small inline script is added to the `<head>` of `index.html`. It ensures the correct theme is applied before React mounts:

```html
    <script>
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    </script>
```

---

## 🧩 Component Logic

The components are structured in **feature-based folders**. Most folders include an `index.tsx` to export the main component, making imports cleaner and hiding internal details.

---

## ⚙️ Additional Notes

* UI elements and modals are built with [shadcn/ui](https://ui.shadcn.com/).
* Responsive design is achieved using Tailwind CSS.

