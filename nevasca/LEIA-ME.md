# Nevasca Lava-jato: landing page (HTML/CSS/JS puro, sem build)

## Publicar na Netlify
**Deploy manual:** app.netlify.com/drop, arraste a pasta `nevasca` (ou o ZIP descompactado).
**Via Git:** suba a pasta para um repositório, em Netlify > Add new site > Import from Git. Build command: vazio. Publish directory: `.`

## Editar
- WhatsApp: `js/main.js`, constante `WHATSAPP`. Mensagens: atributos `data-wa` no `index.html`.
- Preços, textos, endereços e links do Maps/avaliações: `index.html`.
- Dados estruturados (SEO): bloco `application/ld+json` no `<head>`.
- Nova unidade: copie um `<article class="unit">` e um objeto no JSON-LD.

## Pendências
- Fotos reais de Ramos e CDD (blocos tracejados `.ph`).
- Conferir os 2 vídeos: não consegui assistir; verifique se aparece placa de carro. Áudio foi removido.
- Domínio e og:image com URL absoluta após publicar.
- Confirmar o selo/texto de Instagram: não incluído.
