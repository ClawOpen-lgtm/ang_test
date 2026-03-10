import { Routes } from '@angular/router';
import { LinuxAdvocacyComponent } from './linux-advocacy.component';
import { WhyLinuxComponent } from './why-linux/why-linux.component';
import { LinuxDistrosComponent } from './linux-distros/linux-distros.component';

export const routes: Routes = [
  { path: '', redirectTo: '/linux', pathMatch: 'full' },
  { path: 'linux', component: LinuxAdvocacyComponent },
  { path: 'why-linux', component: WhyLinuxComponent },
  { path: 'distros', component: LinuxDistrosComponent },
  { path: '**', redirectTo: '/linux' }
];