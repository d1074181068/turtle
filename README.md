# 烏龜百科網站 
#### 本網站僅作為個人學習之作品集

## 撰寫動機:
自學了一段時間的Bootstrap5，驗收一下自己的學習成果並過程記錄在這裡，看網路上大多都是貓狗類的知識型網站，而且本身也有養兩隻烏龜，所以想實作一下有關烏龜知識的網站。

## 網站內容:
1. 首頁 
    * Banner(CTA)
    * 網站簡介
    * 水龜快速連結
    * 陸龜快速連結
    * 常見問答
    * Footer(contact us、copyright)

2. 查詢種類選擇
    * 水龜總覽連結
    * 陸龜總覽連結

3. 水龜總覽
    * 10種常見水龜   

4. 陸龜總覽
    * 8種常見陸龜

5. 品種詳細介紹
    * 品種圖片輪播
    * 品種卡片(飼養難易度、互動程度、大小、溫度...等)
    * 文章介紹

6. 飼養手冊
    * 水龜飼養手冊(飼養環境、過濾器、日常照顧...等)
    * 陸龜飼養手冊(飼養環境、燈具、日常照顧...等)

7. 常見問答
    * 十題常見新手Q&A

8. 參考連結
    * 照片來源、文章參考連結

### 撰寫時遇到的問題
1. 在做完version1的時候，用chrome上的手機模式觀看是沒問題的，實際用iphone查看發現某些圖片在渲染時出現了拉伸整個螢幕的問題 (android完全沒問題)
    * `原因`: 發現是IOS 是用 WebKit 瀏覽器引擎來渲染網頁，所以他對於 heught:100% 渲染方式跟其他瀏覽器不一樣，
            若無明確標示height的值，就會自動將高度轉為 height: auto，所以才會讓圖片整個拉伸。
    * `解決方式`: bs5的ratio可以讓區塊保持一定的長寬比，避免圖片變形，將有用h-100方式的圖片加上ratio就可以了
    
2. 一樣也是做完version1時，因為我的物種詳細介紹是使用陣列儲存物件，再透過js將陣列資料渲染到html上，但是發現用iphone查看時物種詳細資料完全沒有被js選染過的跡象(就是直接放上我html預設的資料)
    * `原因`: 因為我是把陣列參數戴上網址傳過去，再用正規表達式切出我要的參數，但 IOS 是不兼容這種寫法的 ex: `https://d1074181068.github.io/turtle/html/intro_detail_water.html?2&water`
    * `解決方式`: 一樣使用網址帶參數，不過要改成 `https://d1074181068.github.io/turtle/html/intro_detail_water.html?id=2&type=water`，前面放上參數，再用 `URLSearchParams()`的方式取出參數

3. 網站配色太跳tone，偶然有設計前輩提點，幫助我改善網頁的配色與設計上的問題，從白底黑字的網站，變成一個有統一視覺色系的網站，還提點了我斜體字的使用跟禁忌娃娃體

### 心得: 
以前在切板時都原生css手刻出來的，這次在撰寫使用bs5，深深發現它的強大，不管是模組化的套件可以直接使用，或者是需要搭配js的套件，又或者是透過變數來替色碼的方式，都嚷我體驗到了他的便利性跟快速，在決定題材與網站版型的時候，用蠻長的時間的參考了10幾個網站，過程中改來改去大概1個禮拜後才決定好，中間包括蒐集網路上的素材圖片、品種的詳細介紹的文章，跟熟悉bs5的操作文件，這是我第一次做超過3頁以上的網站，也有透過js讓資料存在陣列中做取用，不然快20個物種如果每個都要做一個頁面那就太多html了，這些過程讓我收穫蠻大的了解到了ios系統的相容性、在運用bs5更上手我相信這些都可以讓我在前端路上走得更長。

