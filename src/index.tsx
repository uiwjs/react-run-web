import React from 'react';
import IFrame from '@uiw/react-iframe';

export interface RunWebProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  css?: string;
  js?: string;
  html?: string;
  title?: string;
  head?: React.ReactNode;
}

export default React.forwardRef<HTMLIFrameElement, RunWebProps>((props, ref) => {
  const { html = '', css, js, title = 'Demo Title', head, ...other } = props;
  const jsString = js ? `<script type="text/javascript">${js}</script>` : '';
  const cssString = css ? `<style>${css}</style>` : '';
  const result = `<!DOCTYPE html><html><head>${cssString}</head><body>${html}</body>${jsString}</html>`;
  const blob = new Blob([result], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  return (
    <IFrame
      title={title}
      head={head}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      {...other}
      ref={ref}
      src={url}
      mountTarget="#mountHere"
    />
  );
});
