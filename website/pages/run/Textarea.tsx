// @ts-ignore
import rehype from 'rehype';
// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import styles from './Textarea.module.less';
import { useEffect, useRef } from 'react';

// function htmlEncode(html: string) {
//   const temp = document.createElement ('div');
//   (temp.textContent !== undefined) ? (temp.textContent = html) : (temp.innerText = html);
//   const output = temp.innerHTML;
//   return output;
// }

function htmlEncode(sHtml: string) {
  return sHtml.replace(
    /[<>&"]/g,
    (c: string) => (({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' } as Record<string, string>)[c]),
  );
}

const processHtml = (html: string) => {
  return rehype()
    .data('settings', { fragment: true })
    .use(rehypePrism, { ignoreMissing: true })
    .processSync(`${html}`)
    .toString();
};
const resultString = (text: string) =>
  text.replace(/<code\sclass="language-(html|css|js)">/, '').replace(/<\/code>/, '');

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  text?: string;
  language?: 'html' | 'js' | 'css';
}

const Textarea = (props: TextareaProps) => {
  const { language, value = '' } = props;
  const textRef = useRef<HTMLTextAreaElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    textRef.current!.onscroll = (evn) => {
      if (viewRef.current) {
        viewRef.current.scrollTop = (evn.target as Element).scrollTop;
      }
    };
  }, []);
  return (
    <div style={{ position: 'relative', margin: 3, width: '100%' }}>
      <textarea
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="off"
        className={styles.textarea}
        ref={textRef}
        {...props}
        value={value}
      />
      <div
        ref={viewRef}
        className={`${styles.codePreview} language-${language}`}
        dangerouslySetInnerHTML={{
          __html: resultString(
            processHtml(
              `<pre aria-hidden=true><code class="language-${language}">${htmlEncode(
                String(value || ''),
              )}</code></pre><br />`,
            ),
          ),
        }}
      />
    </div>
  );
};

export default Textarea;
