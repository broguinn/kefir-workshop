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
  const updateContent = el => content => el.html(el.html() + content);
  const updateValve = (valve, content) => valve.html(content);

  const addTime = message => `${makeTime(new Date())} - ${message}`;
  const makeTime = date =>
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const add = (a, b) => a + b;
  const zeroOrOne = prev => (prev + 1) % 2;

  const openCloseValve = duration => Kefir.interval(duration, 0)
    .toProperty(() => 0)
    .scan(zeroOrOne, 0)
    .map(Boolean);

  /*  In the commented out code below, in an imperative style, we add a message
    to the ".messages" element with the value of the input when the user presses
    <enter>. If the valve is closed, we hold onto the messages in an array, and
    send them through when it's open again */

  // var messageBuffer = []
  // var valveClosed = true
  //
  // messageInput.on('keypress', function(e){
  //   if (isEnter(e)){
  //     var message = e.target.value
  //     message = addTime(message)
  //     var content = makeAlert(message)
  //     if (valveClosed) {
  //       messageBuffer.push(content)
  //     } else {
  //       messagesContainer.append(content)
  //     }
  //     emptyInput(messageInput)
  //   }
  // })
  // toggleValve()
  // setInterval(toggleValve, 3000)
  //
  // function toggleValve(){
  //   valveClosed = Boolean(zeroOrOne(valveClosed))
  //   var valveIndicator = makeIndicator(valveClosed)
  //   updateValve(valveContainer, valveIndicator)
  //   if (!valveClosed) {
  //     var message
  //     for (i in messageBuffer) {
  //       message = messageBuffer[i]
  //       messagesContainer.append(message)
  //     }
  //   }
  // }

  /*  Rewrite the above in a functional reactive style, starting with an
    EventStream from the ".message-input". You can reuse some of the helper
    functions below, modifying them as necessary. Begin by creating a stream
    from the messageInput as before.

    Solution: Expect input to not be inserted when the valve is closed, and
    appended when open.*/

  var messageStream;

  /*  You can use the .map, .filter, .scan and .onValue methods from the "map",
    "filter" and "scan" examples */

  /*  You should use the .holdWhen(valve) method of EventStream to
    to create a stream which is buffered while the valve is closed. Note that if you're working with a property, you'll have to convert to an EventStream to be able to access the .holdWhen() method. You can use the .toEventStream() method of Property */

  /*  You should use the Bacon.fromPoll(interval, fn),
    Bacon.interval(interval, val), or Bacon.repeatedly(interval, values), along
    with functional methods, to create a valve to use with .holdWhen(valve) */
})
