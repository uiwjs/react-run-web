import React, { useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export interface RunWebProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  css?: string;
  js?: string;
  html?: string;
  title?: string;
  head?: React.ReactNode;
}

export default React.forwardRef<HTMLIFrameElement, RunWebProps>((props, ref) => {
  const { html = '', css, js, title = 'Demo Title', head, onLoad, ...other } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const srcDoc = useMemo(() => {
    setIsLoaded(false);
    const jsString = js ? `<script type="text/javascript">${js}</script>` : '';
    const cssString = css ? `<style>${css}</style>` : '';
    return `<!DOCTYPE html><html><head>${cssString}</head><body>${html}</body>${jsString}</html>`;
  }, [css, html, js]);

  function renderFrameContents() {
    if (!frameRef.current || !frameRef.current.contentDocument || !frameRef.current.contentWindow) return null;
    return [ReactDOM.createPortal(head, frameRef.current.contentDocument.head)];
  }

  return (
    <iframe
      title={title}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      {...other}
      onLoad={(evn) => {
        setIsLoaded(true);
        onLoad && onLoad(evn);
      }}
      ref={frameRef}
      srcDoc={srcDoc}
    >
      {isLoaded && renderFrameContents()}
    </iframe>
  );
});
