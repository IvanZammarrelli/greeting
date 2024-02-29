const { submitName, updateUI } = require('./greetingApp');

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
