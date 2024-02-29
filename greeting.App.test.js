const { submitName, updateUI } = require('./greetingApp');
const { JSDOM } = require('jsdom');

// Create a simple DOM environment
const dom = new JSDOM('<html><body></body></html>');
global.document = dom.window.document;

test('submitName function works correctly', () => {
  // Mocking document.getElementById
  document.getElementById = jest.fn(() => ({ value: 'John' }));

  submitName();

  expect(updateUI).toHaveBeenCalledWith('Hello, John!');
});

test('updateUI function updates greetingMessage element', () => {
  document.getElementById = jest.fn(() => ({ innerText: '' }));

  updateUI('Test Message');

  expect(document.getElementById).toHaveBeenCalledWith('greetingMessage');
  expect(document.getElementById('greetingMessage').innerText).toBe('Test Message');
});
