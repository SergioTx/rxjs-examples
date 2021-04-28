import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TestComponent, InputComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '1',
        component: TestComponent,
      },
      {
        path: '2',
        component: TestComponent,
      },
      {
        path: '3',
        component: TestComponent,
      },
      { path: '**', redirectTo: '1' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
