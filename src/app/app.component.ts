import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingV2Component } from './components/loading-v2/loading-v2.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  private isLoading = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoading.asObservable();

  public currentComponent: any;

  ngOnInit() {
    this.currentComponent = Math.random() > 0.5 ? LoadingComponent : LoadingV2Component;
    setTimeout(() => {
      this.isLoading.next(false);
    }, 2000);
  }
}
