
const trashTalk = require('./trash_talk.json')
function generateTrashTalk(target){
    let trashTalkResult = ''
    
    trashTalk.result.forEach(result =>{
        if(target === result.target[0]){
            const taskIndex = Math.floor(Math.random()*result.task.length)
            const phraseIndex = Math.floor(Math.random()*trashTalk.phrase.length)
            trashTalkResult = `<h1 class='text-dark'>身為一名${result.target[1]}，${result.task[taskIndex]}，${trashTalk.phrase[phraseIndex]}！</h1>` 
        }
      }
    )
  
  if(trashTalkResult === '')  trashTalkResult = `<h1 class='text-danger'>你尚未選擇說幹話的對象，請選擇對象後再點擊按鈕！</h1>`

  return trashTalkResult
}

module.exports = generateTrashTalk