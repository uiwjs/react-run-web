import React, { useMemo } from 'react';

export interface RunWebProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  css?: string;
  js?: string;
  html?: string;
  title?: string;
}

export default React.forwardRef<HTMLIFrameElement, RunWebProps>((props, ref) => {
  const { html = '', css, js, title = 'Demo Title', ...other } = props;

  const srcDoc = useMemo(() => {
    const jsString = js ? `<script type="text/javascript">${js}</script>` : '';
    const cssString = css ? `<style>${css}</style>` : '';
    return `<!DOCTYPE html><html><head>${cssString}</head><body>${html}</body>${jsString}</html>`;
  }, [css, html, js]);

  return <iframe title={title} width="100%" height="100%" style={{ border: 0 }} {...other} ref={ref} srcDoc={srcDoc} />;
});
