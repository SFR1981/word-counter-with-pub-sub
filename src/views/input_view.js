const PubSub  = require('../helper/pub_sub.js');


const InputView = function () {

};


InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const inputtedText = evt.target.text.value;
    PubSub.publish('InputView:text-inputted', inputtedText)
  });
};


module.exports = InputView;
