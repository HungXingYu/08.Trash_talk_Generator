const handleBars = require('handlebars')

handleBars.registerHelper("if_radioOn" , function(target , radio , options){
    if(target === radio) return options.fn(this)
    
    return options.inverse(this)
})