import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { SupersetWrapperComponent } from "./superset-wrapper/superset-wrapper.component";
import { WebComponentWrapper, WebComponentWrapperOptions } from "@angular-architects/module-federation-tools";

export const appRoutes: Route[] = [
  {
    path: 'shop',
    loadChildren: () => loadRemote<typeof import('shop/Routes')>('shop/Routes').then(m => m!.remoteRoutes)
  },
  {
    path: 'superset',
    component: SupersetWrapperComponent,
    children: [
      { path: '', redirectTo: 'wrapper', pathMatch: 'full' },
      {
        path: 'wrapper',
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'http://localhost:9001/static/assets/entryFile.js',
          remoteName: 'superset',
          exposedModule: './Views',
          elementName: 'react-element'
        } as WebComponentWrapperOptions
      },
    ]
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
