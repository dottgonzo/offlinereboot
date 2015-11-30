var testinternet=require('promise-test-connection'),
timerdaemon=require('timerdaemon'),
verb=require('verbo'),
hwrestart=require('hwrestart');



module.exports=function(conf){
  var options={
    mode:'unplug',
    wait:0,
    repeat:false, // false=no repeat; 0
    count:false // 0 for continuous
  }
  if(conf){
    merge(options,conf)
  }

setTimeout(function(){
  testConnection().then(function(){
    if((repeat&&!count)||(repeat&&count>0)){
      if(count){
        count=count-1;
      }


    }
  }).catch(function(){
  hwrestart(mode)
})
},options.wait)




  }
