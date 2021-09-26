// index.js
var sum,rand;
function createRand(){
  rand=[];
  for(var i=0;i<7;i++){
    var r=0;
    while(r==0){
      r=parseInt(Math.random()*32);
        }
        r=(r/Math.pow(10,2)).toFixed(2).substr(2)
        rand[i]=r;
        for(var j=0;j<i;j++){
          if(rand[j]==r){
            i=i-1;
          }
        }
    
    console.log(rand[i]);
  }
};
Page({
  data:{
    imgSrc:'/tupian/039063499214cbc7ce82126e2538212d (3).jpeg'},
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:rand
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:rand
    })
    
  }
})
