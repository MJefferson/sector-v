import { TemplateResult } from 'lit-element';

export type WidgetSize = 'tiny' | 'small' | 'medium' | 'large';

export type WidgetSettings = { [setting: string]: string };

export interface WidgetCatalog {
  [tagName: string]: {
    friendlyName: string;
    renderer: WidgetRenderer;
  };
}

export interface WidgetDescriptor {
  id: string;
  renderer: WidgetRenderer;
  offlineDoc: Object;
}

export type WidgetRenderer = (
  widgetId: string,
  size: WidgetSize,
  active: boolean,
  offlineDoc: Object
) => TemplateResult;
