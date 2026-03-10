import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-linux-advocacy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="linux-advocacy">
      <div class="hero bg-primary text-white text-center py-5">
        <div class="container">
          <h1 class="display-3">Linux: The Best OS in the World</h1>
          <p class="lead">Free, Open, Secure, and Powerful. Powering the world's infrastructure, supercomputers, and your digital freedom.</p>
          <a class="btn btn-light btn-lg mt-3" routerLink="/why-linux">Discover Why</a>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🔓 Freedom</h3>
                <p class="card-text">
                  Linux gives you complete control over your computer. No lock-in, no forced updates, no telemetry. You own your system.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🛡️ Security</h3>
                <p class="card-text">
                  Built from the ground up with security in mind. No viruses, no ransomware, and a transparent codebase that anyone can audit.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">⚡ Performance</h3>
                <p class="card-text">
                  Linux runs on everything from smartwatches to supercomputers. It's lean, fast, and efficient—perfect for any hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light py-5">
        <div class="container">
          <h2 class="text-center mb-4">Linux Dominates the World</h2>
          <div class="row text-center">
            <div class="col-md-3">
              <div class="display-4">90%+</div>
              <p>of supercomputers run Linux</p>
            </div>
            <div class="col-md-3">
              <div class="display-4">70%</div>
              <p>of web servers use Linux</p>
            </div>
            <div class="col-md-3">
              <div class="display-4">82%</div>
              <p>of smartphones run Android (Linux-based)</p>
            </div>
            <div class="col-md-3">
              <div class="display-4">100%</div>
              <p>of top 500 supercomputers</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
            <h2>Why Windows and macOS Can't Compete</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">❌ Windows: Proprietary, bloated, vulnerable to malware, expensive licenses</li>
              <li class="list-group-item">❌ macOS: Locked to Apple hardware, closed ecosystem, limited customization</li>
              <li class="list-group-item">✅ Linux: Free, open-source, runs on any hardware, infinitely customizable</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <h2>Get Started Today</h2>
            <p>Choosing Linux means joining a global community of developers, creators, and freedom advocates. Millions have already made the switch.</p>
            <div class="d-grid gap-2">
              <a class="btn btn-primary btn-lg" routerLink="/distros">Choose Your Distribution</a>
              <a class="btn btn-outline-secondary btn-lg" href="https://ubuntu.com/download" target="_blank">Try Ubuntu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .linux-advocacy {
      min-height: 100vh;
    }
    .hero {
      padding: 4rem 0;
    }
    .card {
      border: none;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .card-title {
      font-weight: 600;
    }
    .display-4 {
      font-weight: 700;
      color: #2c3e50;
    }
    .list-group-item {
      border: none !important;
      padding: 1rem 0;
      font-size: 1.1rem;
    }
  `]
})
export class LinuxAdvocacyComponent { }