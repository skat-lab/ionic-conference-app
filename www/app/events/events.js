import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

@IonicView({
  templateUrl: 'app/events/events.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class EventsPage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
  }
}
