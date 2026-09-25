import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';
const raiz = document.getElementById('raiz');
if (raiz) {
    createRoot(raiz).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
}
//# sourceMappingURL=main.js.map