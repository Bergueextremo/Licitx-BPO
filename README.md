# Prisma Público — Landing Page Conceitual

Landing page estática criada como apresentação institucional para uma plataforma de inteligência técnico-jurídica aplicada a licitações e contratos públicos.

## Estrutura
- `index.html` — 12 seções da landing page
- `styles.css` — design system responsivo (Inter + Montserrat)
- `script.js` — motion design com GSAP + ScrollTrigger

## Executar localmente
Abra `index.html` no navegador ou rode um servidor estático, por exemplo:

```bash
python3 -m http.server 8080
```

## Deploy
Pode ser publicado diretamente em Vercel, Netlify, GitHub Pages ou qualquer hospedagem estática.

## Direção de motion
- personalidade premium/corporativa
- entradas com `power3.out`
- baixa amplitude e sem bounce
- animação predominantemente em `transform` + `opacity`
- batches para reveals
- `gsap.quickTo()` para parallax do hero
- suporte a `prefers-reduced-motion`
