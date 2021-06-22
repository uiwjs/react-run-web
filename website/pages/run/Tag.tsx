import styles from './Tag.module.less';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export default function Tag(props: TagProps) {
  const { color } = props;
  return (
    <div className={styles.tag} style={{ color: '#fff', borderColor: color, backgroundColor: color, opacity: 0.9 }}>
      {props.children}
    </div>
  );
}
