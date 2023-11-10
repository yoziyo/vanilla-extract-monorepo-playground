import { style } from '@vanilla-extract/css';
import { KPDSVars } from '@kpds/react';

export const container = style({
  padding: '0px 10px',
});

export const colorContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const colorBox = style({
  margin: '10px',
});

export const colorViewer = style({
  width: '100px',
  height: '100px',
  border: `1px ${KPDSVars.color.gray300} solid`,
});

export const colorKey = style({
  marginTop: '6px',
  textAlign: 'center',
  fontSize: '12px',
});
