function e(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let o=Number(t.target.elements.delay.value);const n=Number(t.target.elements.step.value),l=Number(t.target.elements.amount.value);if(n<=0||o<=0||l<=0)return void alert("Please provide valid values for step, delay, and amount.");for(let t=1;t<=l;t+=1)e(t,o).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),o+=n}));
//# sourceMappingURL=03-promises.1964f1bb.js.map
