# Restaurant Search--Version1

## 目錄--Summary

* [專案概述--Project Description](#1)
* [開發工具與環境--Prerequisites](#2)
* [專案畫面--Running the tests](#3)
* [使用者故事--User Story](#4)
* [專案安裝流程--Installing](#5)
* [專案開發人員--Contributor](#6)


<h2 id="1"> 專案概述--Project Description</h2>

>--ver1--
>
>使用者可在選擇對象後，點擊按鈕，隨機向該對象產生一句幹話

<h2 id="2"> 開發工具與環境--Prerequisites</h2>

1. Windows 10
2. [VSCode](https://code.visualstudio.com/download)
3. [Git](https://git-scm.com/)
4. [Fork](https://git-fork.com//)
5. [nvm](https://github.com/coreybutler/nvm-windows/releases) ([nvm安裝教學](https://www.onejar99.com/nvm-install-for-windows/))
6. Node.js (LTS 10.15.0)([安裝教學](https://www.onejar99.com/nvm-install-for-windows/))
7. Express 
8. Sass/SCSS([安裝與基本語法教學](https://tw.alphacamp.co/blog/css-preprocessor-sass-scss))
9. JavaScript
10. [Bootstrap (v4.5)](https://getbootstrap.com/docs/4.5/getting-started/introduction/)


<h2 id="3"> 專案畫面--Running the tests</h2>

### 首頁
![homePage](/public/img/homePage.png)

### 產生幹話
![postPage1](/public/img/postPage1.png)

### 錯誤處理--未選擇對象
![postPage2](/public/img/postPage2.png)

<h2 id="4"> 使用者故事--User Story</h2>

1. 使用者可以單選任一對象
2. 使用者可以在點擊產生幹話按鈕後，得到一句給選擇對象的幹話
3. 使用者可以在沒有選任何對象點擊按鈕後，得到錯誤提示


<h2 id="5">專案安裝流程--Installing</h2>

>1. 打開終端機(Git Bash or Terminal)，進入您要clone此專案的目錄底下(EX：D槽)
>```
>$ cd d:
>```

>2. Clone 此專案至該目錄底下
>```
>$  git clone https://github.com/HungXingYu/08.Trash_talk_Generator.git
>```

>3. 進入此專案資料夾
>```
>$ cd 08.Trash_talk_Generator
>```

>4. 安裝npm套件
>```
>$  npm install
>```

>5. 啟動伺服器並執行app.js
>```
>$ nodemon app.js
>```
>當終端機最後出現以下內容，及代表伺服器成功啟動
>```
>Express app listening on port 3000.
>```

>6. 開啟任一瀏覽器，輸入 http://localhost:3000 即可開始使用此專案

<h2 id="6">專案開發人員--Contributor</h2>

> ### Clarehung 