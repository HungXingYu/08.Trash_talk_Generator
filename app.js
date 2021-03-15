//#region  require packages used in the project  

//#region 1. Express相關套件
/**express 
 * express-handlebars 
 * express-validator*/
const express = require('express')
const exphbs = require('express-handlebars')
/**Define server related variables */
const app = express()
const port = 3000
//#endregion

//#region  2. 其他需要工具
/**Include  body-parser */
const bodyParser = require('body-parser')
/**Include generate_trashTalk.js */
const generateTrashTalk = require('./generate_trashTalk')
/**Include handlebars_helper.js */
const handleBarsHelper = require('./handlebars_helper')
//#endregion

//#endregion

//#region  app Setting
/**Setting template engine*/
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
/**Setting static files*/
app.use(express.static('public'))
/** Setting  body-parser*/
app.use(bodyParser.urlencoded({ extended: true }))
//#endregion

//#region  Setting routes
/**Index 頁面資料取得與渲染 */
app.get('/', (req, res) => {
  const trashTalkResult = `<h1 class='text-danger'>請選擇您要說幹話的對象後再點擊產生幹話的按鈕！</h1>`
  res.render('index' , {trashTalkResult} )
})

/**Post 資料取得與渲染*/
app.post('/' , (req,res)=>{
  const target = req.body.customRadio
  const trashTalkResult = generateTrashTalk(target);
  res.render('index' , {target , trashTalkResult})
})
//#endregion


//#region  Starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
//#endregion