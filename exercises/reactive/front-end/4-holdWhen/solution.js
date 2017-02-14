$(function(){
  const messagesContainer = $('#hold-when .messages');
  const messageInput = $('#hold-when .message-input');
  const valveContainer = $('#hold-when .valve-indicator');

  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const makeIndicator = closed => closed ?
    '<span class="label label-danger">the valve is closed</span>' :
    '<span class="label label-success">the valve is open</span>';

  const isEnter = e => e.keyCode === 13;
  const extractValue = e => e.target.value;
  const emptyInput = input => e => input.val('');
  const updateContent = el => content => el.html(content.pop());
  const updateValve = valve => content => valve.html(content);

  const addTime = message => `${makeTime(new Date())} - ${message}`;
  const makeTime = date =>
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const add = (a, b) => a + b;
  const zeroOrOne = prev => (prev + 1) % 2;

  const openCloseValve = duration => Kefir.interval(duration, 0)
    .toProperty(() => 0)
    .scan(zeroOrOne, 0)
    .map(Boolean);

  const messageStream = Kefir.fromEvents(messageInput, 'keypress')
    .filter(isEnter)
    .map(extractValue)
    .map(addTime)
    .map(makeAlert)
    .scan(add, '');

  const valve = openCloseValve(3000);

  valve
    .map(makeIndicator)
    .onValue(updateValve(valveContainer));

  messageStream.onValue(emptyInput(messageInput));
  messageStream
    .log('prebuffer')
    .bufferWhileBy(valve, { flushOnChange: true })
    .log('buffered')
    .onValue(updateContent(messagesContainer));
})
