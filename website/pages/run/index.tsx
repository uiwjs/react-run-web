import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Split from '@uiw/react-split';
import Tag from './Tag';
import RunWeb from '../../../';
import TextareaEditor from './Textarea';
import styles from './index.module.less';
import './language.less';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Run() {
  const [htmlStr, setHtmlStr] = useState('');
  const [cssStr, setCssStr] = useState('');
  const [jsStr, setJsStr] = useState('');
  let query = useQuery();

  useEffect(() => {
    const html = query.get('html');
    const css = query.get('css');
    const js = query.get('js');
    if (html) {
      setHtmlStr(html);
    }
    if (css) {
      setCssStr(css);
    }
    if (js) {
      setJsStr(js);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.header}>
        Run Web
        <div className={styles.menu}>
          <a href="https://github.com/uiwjs/react-run-web" target="__blank">
            Github
          </a>
          <Link to="/docs">Docs</Link>
        </div>
      </div>
      <Split style={{ width: '100%', height: 'calc(100vh - 39px)' }}>
        <Split lineBar mode="vertical" style={{ minWidth: 120, width: '43%' }}>
          <div style={{ height: '40%' }} className={styles.editor}>
            <Tag color="#f44336">HTML</Tag>
            <TextareaEditor
              value={htmlStr}
              language="html"
              className={htmlStr ? '' : 'empty'}
              placeholder="Please enter HTML code."
              onPaste={(event) => {
                let paste = (event.clipboardData || (window as any).clipboardData).getData('text');
                setHtmlStr(paste.replace(/^\n+/g, '').replace(/\n+$/g, ''));
                event.preventDefault();
              }}
              onChange={(evn) => setHtmlStr(evn.target.value)}
            />
          </div>
          <div
            style={{
              height: '30%',
              zIndex: 2,
            }}
            className={styles.editor}
          >
            <Tag color="#f7ac09">JS</Tag>
            <TextareaEditor
              value={jsStr}
              language="js"
              className={jsStr ? '' : 'empty'}
              placeholder="Please enter JavaScript code."
              onPaste={(event) => {
                let paste = (event.clipboardData || (window as any).clipboardData).getData('text');
                setJsStr(paste.replace(/^\n+/g, '').replace(/\n+$/g, ''));
                event.preventDefault();
              }}
              onChange={(evn) => setJsStr(evn.target.value)}
            />
          </div>
          <div
            style={{
              height: '30%',
              zIndex: 3,
            }}
            className={styles.editor}
          >
            <Tag color="#004fd4">CSS</Tag>
            <TextareaEditor
              value={cssStr}
              language="css"
              className={cssStr ? '' : 'empty'}
              placeholder="Please enter CSS code."
              onPasteCapture={(event) => {
                let paste = (event.clipboardData || (window as any).clipboardData).getData('text');
                paste = paste.replace(/^\n+/g, '').replace(/\n+$/g, '');
                setCssStr(paste);
                event.preventDefault();
              }}
              onChange={(evn) => setCssStr(evn.target.value)}
            />
          </div>
        </Split>
        <div style={{ minWidth: 120, flex: 1 }}>
          <RunWeb css={cssStr} js={jsStr} html={htmlStr} />
        </div>
      </Split>
    </div>
  );
}
