import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App.js';
const raiz = document.getElementById('raiz');
if (raiz) {
    const arvore = _jsx(StrictMode, { children: _jsx(App, {}) });
    // O build (tools/build.mjs) entrega o HTML já renderizado: o React só o "ativa".
    if (raiz.hasChildNodes())
        hydrateRoot(raiz, arvore);
    else
        createRoot(raiz).render(arvore);
}
//# sourceMappingURL=main.js.map