import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent],
  template: `
    <div class="flex min-h-screen bg-white text-black font-sans">
      <app-sidebar *ngIf="auth.isLoggedIn()"></app-sidebar>

      <main
        [class.ml-72]="auth.isLoggedIn()"
        [class.w-full]="!auth.isLoggedIn()"
        class="flex-grow transition-all duration-300"
      >
        <nav
          *ngIf="auth.isLoggedIn()"
          class="bg-white border-b border-black sticky top-0 z-40 px-8 py-4 flex justify-between items-center h-20"
        >
          <div class="flex items-center gap-4">
            <span class="text-xs font-black text-black uppercase tracking-widest border border-black px-3 py-1.5 rounded-lg">
              STUDENT INFORMATION SYSTEM
            </span>
          </div>

          <div class="flex items-center gap-6">
            <div class="text-right hidden md:block">
              <p class="text-sm font-black text-black uppercase tracking-tight">{{ auth.user()?.username }}</p>
              <p class="text-[10px] text-black font-bold tracking-widest uppercase">Member Authenticated</p>
            </div>

            <button
              (click)="logout()"
              class="bg-black text-white border border-black px-5 py-2.5 rounded-xl font-black text-xs transition-all"
            >
              Sign Out
            </button>
          </div>
        </nav>

        <div class="p-4 md:p-10 max-w-[1600px] mx-auto">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
export class AppComponent {
  auth = inject(AuthService);
  router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
