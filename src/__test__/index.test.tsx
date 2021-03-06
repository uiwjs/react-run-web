/* eslint-disable jest/no-conditional-expect */
import TestRenderer from 'react-test-renderer';
import RunWeb from '../';

it('Should output a RunWeb', async () => {
  const component = TestRenderer.create(<RunWeb />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('iframe');
    expect(tree.props.title).toEqual('Demo Title');
    expect(tree.props.width).toEqual('100%');
    expect(tree.props.height).toEqual('100%');
    expect(tree.props.style).toEqual({ border: 0 });
    expect(tree.props.srcDoc).toEqual('<!DOCTYPE html><html><head></head><body></body></html>');
  }
});

it('RunWeb Props js="..."', async () => {
  const component = TestRenderer.create(<RunWeb js="console.log('hello world!')" />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('iframe');
    expect(tree.props.title).toEqual('Demo Title');
    expect(tree.props.width).toEqual('100%');
    expect(tree.props.height).toEqual('100%');
    expect(tree.props.style).toEqual({ border: 0 });
    expect(tree.props.srcDoc).toEqual(
      `<!DOCTYPE html><html><head></head><body></body><script type="text/javascript">console.log('hello world!')</script></html>`,
    );
  }
});

it('RunWeb Props css="..."', async () => {
  const component = TestRenderer.create(<RunWeb css="body { color:red; }" />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('iframe');
    expect(tree.props.title).toEqual('Demo Title');
    expect(tree.props.width).toEqual('100%');
    expect(tree.props.height).toEqual('100%');
    expect(tree.props.style).toEqual({ border: 0 });
    expect(tree.props.srcDoc).toEqual(
      `<!DOCTYPE html><html><head><style>body { color:red; }</style></head><body></body></html>`,
    );
  }
});
