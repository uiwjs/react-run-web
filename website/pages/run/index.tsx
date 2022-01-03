import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Split from '@uiw/react-split';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Tag from './Tag';
import RunWeb from '../../../';
import styles from './index.module.less';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Run() {
  const [htmlStr, setHtmlStr] = useState('');
  const [cssStr, setCssStr] = useState('');
  const [jsStr, setJsStr] = useState('');
  const query = useQuery();
  const navigate = useNavigate();

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

  const handleChange = (value: string, type: 'html' | 'css' | 'js') => {
    switch (type) {
      case 'html':
        setHtmlStr(value);
        query.set('html', value);
        break;
      case 'css':
        setCssStr(value);
        query.set('css', value);
        break;
      case 'js':
        setJsStr(value);
        query.set('js', value);
        break;
      default:
        break;
    }
    navigate(`?${query.toString()}`, {
      replace: true,
      state: query.toString(),
    });
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.header}>
        Run Web
        <div className={styles.menu}>
          <a href="https://github.com/uiwjs/react-run-web" target="__blank">
            Github
          </a>
          <Link to="/docs" state={query.toString() || ''}>
            Docs
          </Link>
        </div>
      </div>
      <Split style={{ width: '100%', height: 'calc(100vh - 39px)' }}>
        <Split lineBar mode="vertical" style={{ minWidth: 120, width: '43%' }}>
          <div style={{ height: '40%' }} className={styles.editor}>
            <Tag color="#f44336">HTML</Tag>
            <div className={styles.editorCode}>
              <CodeEditor
                value={htmlStr}
                style={{ minHeight: '100%' }}
                placeholder="Please enter HTML code."
                onChange={(evn) => handleChange(evn.target.value, 'html')}
                language="html"
              />
            </div>
          </div>
          <div
            style={{
              height: '30%',
              zIndex: 2,
            }}
            className={styles.editor}
          >
            <Tag color="#f7ac09">JS</Tag>
            <div className={styles.editorCode}>
              <CodeEditor
                value={jsStr}
                style={{ minHeight: '100%' }}
                placeholder="Please enter JavaScript code."
                onChange={(evn) => handleChange(evn.target.value, 'js')}
                language="js"
              />
            </div>
          </div>
          <div
            style={{
              height: '30%',
              zIndex: 3,
            }}
            className={styles.editor}
          >
            <Tag color="#004fd4">CSS</Tag>
            <div className={styles.editorCode}>
              <CodeEditor
                value={cssStr}
                style={{ minHeight: '100%' }}
                placeholder="Please enter CSS code."
                onChange={(evn) => handleChange(evn.target.value, 'css')}
                language="css"
              />
            </div>
          </div>
        </Split>
        <div style={{ minWidth: 120, flex: 1 }}>
          <RunWeb css={cssStr} js={jsStr} html={htmlStr} head={<meta charSet="utf-8" />} />
        </div>
      </Split>
    </div>
  );
}
