# Workspace

## Overview

pnpm workspace monorepo usando TypeScript. Projeto de agendamento da Barbearia TM com banco de dados PostgreSQL.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS

## Artifacts

### Barbearia TM (`artifacts/barbearia-tm`)
Sistema completo de agendamento para barbearia.
- Design dark+gold fiel ao HTML original
- Seleção de serviços, calendário, horários, formulário de cliente
- Integração com API para horários disponíveis e criação de agendamentos
- Painel admin (senha: 1234) para gerenciar disponibilidade

### API Server (`artifacts/api-server`)
Backend Express com as seguintes rotas:
- `GET /api/slots?date=YYYY-MM-DD` — horários disponíveis para uma data
- `GET /api/slots/month?year=&month=` — resumo de disponibilidade do mês
- `POST /api/bookings` — criar agendamento (marca horário como ocupado)
- `POST /api/admin/login` — login do painel admin (senha: 1234)
- `GET /api/admin/slots?date=` — ver todos os horários com status (admin)
- `PUT /api/admin/slots` — atualizar disponibilidade (admin)
- `GET /api/admin/bookings?date=` — ver agendamentos do dia (admin)

## Database Schema

### `bookings` table
- id, client_name, client_phone, services, date, time_slot, total_price, created_at

### `slots` table
- id, date, time, is_blocked (admin pode bloquear horários)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Business Logic

- Domingos são sempre bloqueados (sem agendamentos)
- Horário padrão: 08:00-11:00 e 14:00-18:00
- Quando um cliente agenda, o horário fica indisponível para outros
- Admin pode bloquear/liberar horários específicos por data
- Admin pode ver todos os agendamentos do dia

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
