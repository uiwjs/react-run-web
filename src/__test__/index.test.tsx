/* eslint-disable jest/no-conditional-expect */
import TestRenderer from 'react-test-renderer';
import RunWeb from '../';

it('Should output a button', async () => {
  const component = TestRenderer.create(<RunWeb></RunWeb>);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    // expect(tree.type).toEqual('button');
    // expect(tree.props.disabled).toBeFalsy();
    // expect(tree.props.className).toEqual('w-btn w-btn-default w-btn-primary');
  }
});
