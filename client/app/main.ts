import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {AppComponent} from './app.component'
import {Connection} from './connect.component'


	bootstrap(AppComponent, [
  HTTP_PROVIDERS
])
bootstrap(Connection);
