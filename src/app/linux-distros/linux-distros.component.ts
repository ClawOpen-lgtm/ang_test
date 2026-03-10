import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-linux-distros',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="linux-distros py-4">
      <div class="container">
        <h1 class="mb-4">Popular Linux Distributions</h1>
        <p class="lead mb-5">
          Choose the distribution that fits your needs. All are free and open-source.
        </p>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🐧 Ubuntu</h3>
                <p class="card-text">
                  The most popular Linux distribution. User-friendly, great for beginners, with extensive community support and commercial backing from Canonical.
                </p>
                <div class="badge bg-success me-1">Beginner Friendly</div>
                <div class="badge bg-primary me-1">GNOME</div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🏔️ Fedora</h3>
                <p class="card-text">
                  Cutting-edge software, backed by Red Hat. Perfect for developers and those who want the latest features with solid stability.
                </p>
                <div class="badge bg-primary me-1">Developer</div>
                <div class="badge bg-info me-1">GNOME</div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🔥 Arch Linux</h3>
                <p class="card-text">
                  A DIY distribution that gives you complete control. Install only what you need, build your system from the ground up. Not for beginners, but incredibly rewarding.
                </p>
                <div class="badge bg-warning text-dark me-1">Advanced</div>
                <div class="badge bg-secondary me-1">Rolling Release</div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🪟 Linux Mint</h3>
                <p class="card-text">
                  Based on Ubuntu, Linux Mint offers a familiar desktop experience similar to Windows. Great for users switching from Windows.
                </p>
                <div class="badge bg-success me-1">Beginner Friendly</div>
                <div class="badge bg-secondary me-1">Cinnamon</div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">💎 Debian</h3>
                <p class="card-text">
                  The rock-solid foundation for Ubuntu and many others. Extremely stable, purely community-driven, and committed to free software.
                </p>
                <div class="badge bg-info me-1">Stable</div>
                <div class="badge bg-secondary me-1">Community</div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">🎯 Manjaro</h3>
                <p class="card-text">
                  Arch Linux made accessible. User-friendly installer, pre-configured desktop environments, and access to the Arch User Repository (AUR).
                </p>
                <div class="badge bg-primary me-1">Intermediate</div>
                <div class="badge bg-info me-1">Rolling Release</div>
              </div>
            </div>
          </div>
        </div>

        <div class="alert alert-info mt-5" role="alert">
          <h4 class="alert-heading">Can't decide?</h4>
          <p>
            Try a few distributions in a virtual machine first, or create bootable USB drives.
            Most distros offer a "Live" environment so you can test without installing.
          </p>
          <hr>
          <p class="mb-0">
            <strong>Pro tip:</strong> Start with Ubuntu or Linux Mint if you're new to Linux.
          </p>
        </div>

        <div class="text-center mt-4">
          <a class="btn btn-outline-primary btn-lg" routerLink="/">Back to Home</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-4px);
    }
    .card-title {
      font-weight: 600;
      color: #2c3e50;
    }
  `]
})
export class LinuxDistrosComponent { }