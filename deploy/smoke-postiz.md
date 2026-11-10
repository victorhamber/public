# Smoke — MASTER unificado (fluxo → publishing interno)

## Sobe o stack
```bash
cp .env.master.example .env.master
# preencha ENCRYPTION_SECRET, JWT, WAHA_*
docker compose -f docker-compose.master.yml --env-file .env.master up -d
```

## Checklist
1. Builder `http://localhost:8080` — login Typebot.
2. Nav **Publicações** → `/publishing` (iframe do calendário publishing em `:4007`).
3. Em publishing: conectar canal / confirmar WhatsApp WAHA.
4. Criar API Key na org publishing; no Typebot workspace, credencial Postiz:
   - baseUrl: `http://publishing:5000/api` (server-side no viewer) **ou** URL pública `/api` se o bloco rodar via URL alcançável
   - apiKey: raw key
5. Fluxo: Text → **Postiz Publish** (`now` + channel IDs) → rodar no Viewer.
6. Esperado: post no calendário publishing + envio WhatsApp se canal WA.

## SSRF
Builder/viewer precisam `SSRF_ALLOWED_HOSTS` contendo `publishing` (já no `docker-compose.master.yml`).
