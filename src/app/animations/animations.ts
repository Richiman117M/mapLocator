import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 })),
  ]),
  transition('* => void', [
    animate(300, style({ opacity: 0 })),
  ]),
]);
