import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-linux',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="why-linux py-4">
      <div class="container">
        <h1 class="mb-4">Why Linux Is Superior</h1>

        <div class="row mb-5">
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">🎮 Freedom & Control</h4>
                <p class="card-text">
                  With Linux, you are in complete control. No forced updates, no telemetry, no backdoors. You decide what runs on your system, when, and how. The source code is open for anyone to inspect, modify, and share.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">💰 It's Free (as in Freedom AND Price)</h4>
                <p class="card-text">
                  Linux distributions are completely free to download, use, and share. No licensing fees, no subscriptions. You can install it on as many computers as you want, forever.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">🔧 Infinite Customization</h4>
                <p class="card-text">
                  From the kernel to the desktop environment, you can customize every single aspect of Linux. Want a lightweight system? A full-blown workstation? A media center? It's all possible.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">🛡️ Security First</h4>
                <p class="card-text">
                  Linux was built with security in mind. Its permission model, package management, and open codebase make it extremely difficult for malware to take hold. Viruses and ransomware? Mostly a Windows problem.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">⚡ Performance & Efficiency</h4>
                <p class="card-text">
                  Linux runs on everything from smartwatches to the world's fastest supercomputers. It uses resources efficiently and can breathe new life into old hardware.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">🌍 Community & Support</h4>
                <p class="card-text">
                  A massive global community of developers and users contributes to Linux. Forums, documentation, and tutorials are abundant and free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <a class="btn btn-primary btn-lg" routerLink="/distros">Explore Distributions</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }
    .card-title {
      font-weight: 600;
    }
  `]
})
export class WhyLinuxComponent { }