import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Split from '@uiw/react-split';
import RunWeb from '../../../';
import styles from './index.module.less';
import Tag from './Tag';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    draggable
    style={{ width: '100%', resize: 'none', position: 'relative', border: 0, padding: 5 }}
    {...props}
  />
);

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
          <div style={{ height: '40%', display: 'flex', padding: 1, position: 'relative', backgroundColor: '#fff' }}>
            <Tag color="#e94d27">HTML</Tag>
            <Textarea
              value={htmlStr}
              placeholder="Please enter HTML code."
              onChange={(evn) => {
                setHtmlStr(evn.target.value);
              }}
            />
          </div>
          <div
            style={{
              height: '30%',
              display: 'flex',
              padding: 1,
              position: 'relative',
              backgroundColor: '#fff',
              zIndex: 2,
            }}
          >
            <Tag color="#dfa424">JS</Tag>
            <Textarea
              value={jsStr}
              placeholder="Please enter JavaScript code."
              onChange={(evn) => {
                setJsStr(evn.target.value);
              }}
            />
          </div>
          <div
            style={{
              height: '30%',
              display: 'flex',
              padding: 1,
              position: 'relative',
              backgroundColor: '#fff',
              zIndex: 3,
            }}
          >
            <Tag color="#0874b7">CSS</Tag>
            <Textarea
              value={cssStr}
              placeholder="Please enter CSS code."
              onChange={(evn) => {
                setCssStr(evn.target.value);
              }}
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
