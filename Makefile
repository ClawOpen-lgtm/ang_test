.PHONY: help install build serve test lint clean docker-build docker-run

help:
	@echo "Available commands:"
	@echo "  make install      - Install dependencies"
	@echo "  make build        - Build the application for production"
	@echo "  make serve        - Start development server"
	@echo "  make test         - Run unit tests"
	@echo "  make lint         - Run linting"
	@echo "  make clean        - Remove build artifacts"
	@echo "  make docker-build - Build Docker image"
	@echo "  make docker-run   - Run Docker container"

install:
	npm ci

build:
	npx ng build --configuration production

serve:
	npx ng serve

test:
	npx ng test --watch=false --browsers=ChromeHeadless

lint:
	npx ng lint

clean:
	rm -rf dist/ node_modules/ .angular/

docker-build:
	docker build -t ang_test:latest .

docker-run:
	docker run -p 4200:80 ang_test:latest