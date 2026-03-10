# 🐧 LinuxIsTheBest.org

An Angular web application advocating for Linux as the world's best operating system.

[![Angular](https://img.shields.io/badge/Angular-17.x-DD0031.svg)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 About

LinuxIsTheBest.org is a modern, responsive website that makes the case for Linux:

- **Freedom & Control** – No lock-in, no forced updates, complete ownership
- **Security** – Built-in security, no viruses, transparent code
- **Performance** – Runs on everything from smartwatches to supercomputers
- **Community** – Supported by a global community of developers

The site includes:
- Statistics showing Linux dominance (90%+ of supercomputers, 70%+ of servers, 82% of smartphones via Android)
- Comparisons with Windows and macOS
- A guide to popular Linux distributions (Ubuntu, Fedora, Debian, Arch, etc.)
- Responsive design with Bootstrap 5

---

## 🚀 Quick Start

### Local Development

```bash
git clone https://github.com/ClawOpen-lgtm/ang_test.git
cd ang_test
./setup.sh          # Linux/macOS
# or: npm ci        # Manual install
npm start           # Start dev server at http://localhost:4200
```

### Docker

```bash
docker-compose up   # Build and run at http://localhost:4200
# or:
make docker-build && make docker-run
```

---

## 📁 Project Structure

```
src/app/
├── app.component.*      # Root component with navigation
├── app.routes.ts        # Route definitions
├── app.config.ts        # Standalone app config
├── linux-advocacy.component.ts   # Homepage with key arguments
├── why-linux/           # Detailed reasons page
└── linux-distros/       # Distribution showcase page
```

---

## 🛠️ Development

| Command | Description |
|---------|-------------|
| `npm start` | Development server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm test` | Run unit tests |
| `make lint` | Lint code |
| `make clean` | Remove build artifacts |

---

## 📊 Key Facts

- 100% of the Top 500 supercomputers run Linux
- Over 70% of web servers use Linux
- Android (Linux-based) powers ~82% of smartphones globally
- Linux is completely free—no licensing costs ever

---

## 🤝 Contributing

This is an advocacy site. Feel to submit issues or PRs to improve the content, design, or add more Linux facts.

---

## 📄 License

MIT – see LICENSE file for details.

Built with ❤️ and open-source software.