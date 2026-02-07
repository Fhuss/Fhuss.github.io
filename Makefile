.PHONY: dev build deploy help

help:
	@echo "GitHub Pages + Vite React"
	@echo ""
	@echo "  make dev     - Start dev server (localhost:5173)"
	@echo "  make build   - Build for production"
	@echo "  make deploy  - Build and push to GitHub Pages (gh-pages branch)"
	@echo ""

dev:
	npm run dev

build:
	npm run build

deploy: build
	npm run deploy
