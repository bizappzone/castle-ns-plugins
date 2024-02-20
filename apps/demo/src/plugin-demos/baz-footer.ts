import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazFooter } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-footer';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazFooter {}
