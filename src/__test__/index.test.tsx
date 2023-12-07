import { screen, render, waitFor } from '@testing-library/react';
import RunWeb from '../';

global.URL.createObjectURL = jest.fn((url) => {
  return '';
});

it('renders <RunWeb /> test case', async () => {
  const { debug } = render(<RunWeb data-testid="iframe" />);
  await waitFor(() => {
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toHaveProperty('srcdoc', '<!DOCTYPE html><html><head></head><body></body></html>');
    expect(iframe).toHaveProperty('style.border', '0px');
    expect(iframe).toHaveProperty('title', 'Demo Title');
    expect(iframe).toHaveProperty('width', '100%');
    expect(iframe).toHaveProperty('height', '100%');
  });
});

it('RunWeb Props js="..."', async () => {
  const { debug } = render(<RunWeb data-testid="iframe" title="Example" js="console.log('hello world!')" />);
  await waitFor(() => {
    // debug()
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toHaveProperty('srcdoc', '<!DOCTYPE html><html><head></head><body></body></html>');
    expect(iframe).toHaveProperty('style.border', '0px');
    expect(iframe).toHaveProperty('title', 'Example');
    expect(iframe).toHaveProperty('width', '100%');
    expect(iframe).toHaveProperty('height', '100%');
  });
});

it('RunWeb Props css="..."', async () => {
  const { debug } = render(<RunWeb data-testid="iframe" css="body { color:red; }" />);
  await waitFor(() => {
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toHaveProperty('srcdoc', '<!DOCTYPE html><html><head></head><body></body></html>');
    expect(iframe).toHaveProperty('style.border', '0px');
    expect(iframe).toHaveProperty('title', 'Demo Title');
    expect(iframe).toHaveProperty('width', '100%');
    expect(iframe).toHaveProperty('height', '100%');
  });
});
