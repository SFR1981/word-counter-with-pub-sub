const PubSub  = require('../helper/pub_sub.js');

const ResultView = function (){

};


ResultView.prototype.bindEvents = function (){
  PubSub.subscribe("WordCounter:result", (evt) => {
    const result = evt.detail;
    console.log(evt);
    this.updateView(result);
  })

};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === 1) {
      resultElement.textContent = `There is only ${result} word!`
    }else{
      resultElement.textContent = `There are ${result} words!`
    }

};



module.exports = ResultView;
