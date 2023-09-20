env:
	@cp .env.example .env

dev:
	@npm run dev

build:
	@npm run build

install:
	@npm i --force

start-stage:
	@npx pm2 start ecosystem.config.cjs --only frontend

stop-stage:
	@npx pm2 delete frontend