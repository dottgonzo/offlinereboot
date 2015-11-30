var testinternet=require('promise-test-connection'),
timerdaemon=require('timerdaemon'),
verb=require('verbo'),
hwrestart=require('hwrestart');

function offreboot(options){
  setTimeout(function(){
    testConnection().then(function(){
      if(options.repeat){
offreboot(options);
      }
    }).catch(function(){
    hwrestart(options.mode)
  })
},options.repeat)

}

module.exports=function(conf){
  var options={
    mode:'unplug',
    repeat:false // false or timer to check
  }
  if(conf){
    merge(options,conf)
  }


  testConnection().then(function(){
    if(options.repeat){

timerdaemon.post(options.repeat,function(){
  testConnection().catch(function(){
  hwrestart(options.mode)
})

})

    }
  }).catch(function(){
  hwrestart(options.mode)
})



  }
