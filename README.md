# React Redux Markdown Previewer

## Yayınlandı: https://fanciful-pony-5e0687.netlify.app/

## Açılış ekranı
![markdownpreviewer](https://user-images.githubusercontent.com/36435160/188700560-9bfc297d-56ba-4987-ada2-afb98d263704.png)


## Redux useSelector ile sol tarafta yazılan metin çekilmektedir. mardown state ile sol tarafa yazılan metin markdown içerisine kaydedilmektedir. ishelp state butona tıklanma durumunu kontrol eder. counter state butonun tıklanınca açılması ve tekrar tıklanınca kapanması durumunu kontrol eder. text değiştiğinde useEffect dispatch aracılığıyla mardown verisi redux textmarked reducer ile karşılanır. counter 2 ye bölümünden kalan ile butonun açılıp kapanması kontrol edilir. butona tıklanınca redux reducer helpclick ile karşılanır
![markdownpreviewer1](https://user-images.githubusercontent.com/36435160/188709579-769d76e5-302a-4f2b-bfb1-37fead4ae6c3.png)

## textarea içerisine yazılanlar setMarkdown ile markdown içerisine kaydedilir. Sağ taraftaki markdown olan kısım için ReactMarkDown kullanılmıştır. isHelp ile buton durumu kontrol edilir ona göre buttonClick ilgili buton gelir.
![markdownpreviewer2](https://user-images.githubusercontent.com/36435160/188709633-4db24bed-8725-4c07-a46f-624af4c348cc.png)

## initial state input text burada tanımlanmıştır. helpdata içeriği butona tıklanınca yazılacak olan veridir. Reducer textmarked ile karşılanan veri input text içerisine kaydedilir. helpClick ile karşılanan kısımda input text içerisine helpdata yazılır burası butona tıklanınca gelinen yerdir. Kapatmak için tekrar butona tıklanınca closeHelpClick ile karşılanır ve input text boş kaydedilir.
![markdownpreviewer3](https://user-images.githubusercontent.com/36435160/188709977-7194fe9e-2dc8-4d63-9869-2b5742d85ff0.png)

## Redux store
![markdownpreviewer4](https://user-images.githubusercontent.com/36435160/188710382-f9f0256b-f9a5-44fc-858d-31982a7a4205.png)
