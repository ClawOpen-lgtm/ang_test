# AngTest

A modern Angular 17 application with TypeScript, featuring routing, components, and interactive examples.

[![Angular](https://img.shields.io/badge/Angular-17.x-DD0031.svg)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg)](https://nodejs.org)

---

## Features

- ⚡ Angular 17 with Standalone Components support
- 🔄 Client-side routing with Angular Router
- 📦 TypeScript 5.x
- 🎨 Bootstrap 5.x for responsive styling
- 🧪 Unit testing with Karma & Jasmine
- 🐳 Docker support for containerized deployment
- 🛠️ Makefile for common development tasks
- 📝 Linux/macOS friendly setup scripts

---

## Quick Start

### Option 1: Local Development (Linux/macOS/Windows)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ClawOpen-lgtm/ang_test.git
   cd ang_test
   ```

2. **Run the setup script (Linux/macOS):**
   ```bash
   ./setup.sh
   ```

   Or install manually:
   ```bash
   npm ci
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or: make serve
   ```

4. Open http://localhost:4200 in your browser.

---

### Option 2: Docker

Build and run using Docker (no local Node.js required):

```bash
# Build the Docker image
make docker-build
# or: docker build -t ang_test:latest .

# Run the container
make docker-run
# or: docker run -p 4200:80 ang_test:latest
```

Then open http://localhost:4200

**Using Docker Compose:**
```bash
docker-compose up
```

---

## Development Commands

Using **npm scripts:**
```bash
npm start           # Start dev server (ng serve)
npm run build       # Build for production
npm test            # Run unit tests
npm run lint        # Run linting
```

Using **Make** (recommended for Linux/macOS):
```bash
make serve          # Start development server
make build          # Production build
make test           # Run tests headlessly
make lint           # Lint code
make clean          # Clean build artifacts
make help           # Show all commands
```

---

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Root component
│   ├── app.component.html    # Root template
│   ├── app.component.css     # Root styles
│   ├── app.routes.ts         # Route definitions
│   ├── home.component.ts     # Home page
│   ├── about.component.ts    # About page
│   └── counter.component.ts  # Interactive counter demo
├── assets/                   # Static assets
├── environments/
│   ├── environment.ts        # Development config
│   └── environment.prod.ts   # Production config
├── index.html                # Main HTML
├── main.ts                   # Application entry point
├── polyfills.ts              # Polyfills
└── styles.css                # Global styles

angular.json      # Angular CLI configuration
package.json      # Dependencies and scripts
tsconfig*.json    # TypeScript configurations
Dockerfile        # Multi-stage Docker build
docker-compose.yml # Docker Compose config
Makefile          # Development shortcuts
```

---

## Building for Production

```bash
npm run build
# or: make build
```

Output goes to `dist/ang_test/` (or `dist/ang_test/browser/` for Docker).

---

## Testing

```bash
npm test
# or: make test
```

For watch mode:
```bash
npx ng test
```

---

## Linux/MacOS Setup Script

The `setup.sh` script automates environment validation and dependency installation:

- Checks Node.js version (requires 18+)
- Checks npm availability
- Installs dependencies with `npm ci`
- Verifies Angular CLI

Run it after cloning:
```bash
chmod +x setup.sh
./setup.sh
```

---

## Docker Details

**Production image:** Multi-stage build using Node.js builder and Nginx runtime.

**Build args:**
- None currently needed

**Runtime:**
- Served on port 80 (mapped to host port 4200 by default)
- Static files only (client-side routing)

**Customization:**
- Edit `nginx.conf` to modify server behavior
- For development with hot-reload, modify `docker-compose.yml` to mount source volumes and run `npm start` instead of building.

---

## Requirements

- **Local development:** Node.js 18+ and npm 9+
- **Docker:** Docker 20+ and Docker Compose 2+ (optional)
- **Make:** GNU Make 4+ (optional, but recommended on Linux/macOS)

---

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Build for production (optimized) |
| `npm test` | Run unit tests once |
| `npm run lint` | Run ESLint/Angular lint |
| `make serve` | Alias for `npm start` |
| `make build` | Alias for `npm run build` |
| `make test` | Run tests headlessly (ChromeHeadless) |
| `make docker-build` | Build Docker image |
| `make docker-run` | Run Docker container |

---

## Notes

- This project uses Angular 17 with the default NgModule-based architecture (not standalone components)
- Bootstrap 5 is included for styling
- The application uses hash-free routing (HTML5 pushState) - Nginx config handles fallback to `index.html`

---

## License

MIT
