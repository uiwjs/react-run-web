import MarkdownPreview from '@uiw/react-markdown-preview';
import MDStr from '../../../README.md';

export default function Docs() {
  return (
    <div style={{ margin: '0 auto', maxWidth: 650, paddingTop: 50, paddingBottom: 60 }}>
      <MarkdownPreview source={MDStr} />
    </div>
  );
}
