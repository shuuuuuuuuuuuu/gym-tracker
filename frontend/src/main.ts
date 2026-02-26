import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { addIcons } from 'ionicons';
import { 
  add,
  close,
  chevronBackOutline,
  chevronForwardOutline,
  personCircleOutline,
  lockClosedOutline,
  exitOutline,
  barbellOutline,
  playSkipBack,
  playSkipForward,
  chevronBack,
  chevronForward,
 } from 'ionicons/icons';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

  addIcons({
    add,
    close,
    chevronBackOutline,
    chevronForwardOutline,
    personCircleOutline,
    lockClosedOutline,
    exitOutline,
    barbellOutline,
    playSkipBack,
    playSkipForward,
    chevronBack,
    chevronForward,
  });