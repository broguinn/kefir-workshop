$(function(){
  const messageInput = $('#map .message-input');
  const messageContent = $('#map .message');

  const extractValue = e => e.target.value;
  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const updateContent = el => content => el.html(content);
  
  /*  In the commented out code below, in an imperative style, update the
    content of ".message" when the user types in the input.

    Solution: When this is updated correctly, expect to see the input content
    appear as you type.*/

  // messageInput.on('keypress', updateContent)
  //
  // function updateContent(e){
  //   var message = e.target.value
  //   var content = makeAlert(message)
  //   messageContent.html(content)
  // }

  /*  Rewrite the above in a functional reactive style, starting with an
    EventStream from the ".message-input". Start by creating an event stream off
    of the messageInput above that listens for keypress */

  const inputStream; //stream generation here

  /*  You can call the inputStream's .map(mapper) method to create a new
    stream whose elements are derived from the raw event objects */

  /*  You can call the inputStream's .onValue(callback) method with a callback
    that updates the messageContent element */
})
