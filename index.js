var testinternet=require('promise-test-connection'),
timerdaemon=require('timerdaemon'),
verb=require('verbo'),
merge=require('json-add'),
hwrestart=require('hwrestart');



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
