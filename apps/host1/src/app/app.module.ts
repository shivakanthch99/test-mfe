import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'remote1',
          loadChildren: () =>
            import('remote1/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'remote2',
          loadChildren: () =>
            import('remote2/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'disabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
