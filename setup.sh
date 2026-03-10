#!/usr/bin/env bash

# Angular Development Environment Setup Script
# For Linux/macOS systems

set -e  # Exit on error

echo "========================================="
echo "Angular Development Environment Setup"
echo "========================================="

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2)
MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1)

if [ $MAJOR_VERSION -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current: $NODE_VERSION"
    exit 1
fi

echo "✅ Node.js $NODE_VERSION detected"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm"
    exit 1
fi

echo "✅ npm detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm ci

# Check if Angular CLI is available locally
if [ ! -f "node_modules/.bin/ng" ]; then
    echo "⚠️  Angular CLI not found in node_modules. Installing..."
    npm install @angular/cli
fi

echo ""
echo "========================================="
echo "✅ Setup complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "  1. Run 'make serve' or 'npm start' to start development server"
echo "  2. Open http://localhost:4200 in your browser"
echo ""
echo "Other useful commands:"
echo "  make build      - Build for production"
echo "  make test       - Run tests"
echo "  make lint       - Run linter"
echo "  make docker-build - Build Docker image"
echo ""