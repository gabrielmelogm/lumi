#!/bin/bash
cd apps/api && npm install && npx prisma migrate dev && npm run dev
