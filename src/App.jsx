import { Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import TestimonialPage from './pages/TestimonialPage';

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/layanan" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
// FILE: eslintrc.cjs

// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version:   '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': 'warn',
//   },
// }
