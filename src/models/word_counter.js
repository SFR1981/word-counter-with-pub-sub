const PubSub  = require('../helper/pub_sub.js');

const WordCounter = function () {

};


WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt)=>{
    const inputtedText = evt.detail;
    const result = this.numberOfWords(inputtedText);
    PubSub.publish("WordCounter:result", result);
  } )

};


WordCounter.prototype.numberOfWords = function (text) {
    return text.replace(/\s+/g,' ').trim().split(' ').length;
};


module.exports = WordCounter;
