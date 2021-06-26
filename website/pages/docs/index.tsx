import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import { Link } from 'react-router-dom';
import MDStr from '../../../README.md';
import styles from './index.module.less';

export default function Docs() {
  return (
    <div style={{ margin: '0 auto', maxWidth: 650, paddingTop: 50, paddingBottom: 60 }}>
      <GitHubCorners fixed size={52} target="__blank" href="https://github.com/uiwjs/react-run-web" />
      <Link
        className={styles.link}
        to="/?html=<div>Hello%20World</div>&js=console.log('hello%20world')&css=div%20{%20color:%20red;}"
      >
        <svg viewBox="0 0 1087 1024" height="14" style={{ marginRight: 8 }}>
          <path
            fill="currentColor"
            d="M497.579901 211.531321V41.021661a40.850381 40.850381 0 0 0-70.481893-28.004349L39.404774 363.457054c-85.126369 62.003513-5.823534 108.506147-5.823535 108.506147L415.365299 819.234256c76.305428 58.834825 82.214602-31.001756 82.214602-31.001756V630.140671c387.693234-127.175713 546.298904 381.441499 546.298905 381.441498 14.730116 27.833068 23.465418 0 23.465417 0C1217.128952 248.699172 497.579901 211.44568 497.579901 211.44568z"
          />
        </svg>
        Run Web
      </Link>
      <MarkdownPreview source={MDStr} />
    </div>
  );
}
