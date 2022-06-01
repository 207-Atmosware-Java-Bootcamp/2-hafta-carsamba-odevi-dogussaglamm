//obje start ///////////////////////////////////

var obje= {
    "Adınız" : "Doğuş" ,
    "Soyadınız" : "Sağlam"
  }

  console.log(obje)
  document.write(obje+"<br>")

  var objectToString=JSON.stringify(obje);
  document.write(objectToString)



  //obje end ///////////////////////////////////


 //math start ///////////////////////////////////////

 number1= 12
 number2= -5

 // s1-) Bu sayılardan en küçüğü nedir ?
 document.write(Math.min(number1,number2)+"<br>")

 // s2-) Bu sayılardan en büyüğü nedir ?
 document.write(Math.max(number1,number2)+"<br>")

 // s3-) Bu sayılardan en büyüğünün karekökü nedir ?
 document.write(Math.sqrt(Math.abs(Math.max(number1,number2)))+"<br>")

// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
document.write(Math.ceil(Math.sqrt(Math.abs(Math.max(number1,number2))))+"<br>")

// s5-) Bu sayılardan en küçüğü mutlak nedir ?
document.write(Math.abs(Math.min(number1,number2))+"<br>")

// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

 document.write(Math.pow(Math.abs(Math.min(number1,number2)), Math.abs(Math.max(number1,number2)))+"<br>")

 //math end ///////////////////////////////////////




 //string  start ///////////////////////////////////////

 var kelime="junior Software DEVELOPER";

 //S-1) Kaç karakterlidir ?
 document.write(kelime.length +"<br>")
 //S-2) boşluklar alınarak Kaç karakterlidir ?
 document.write(kelime.trim().length+"<br>")
 //S-3) bütün kelimeyi küçük harfle göstermek ? 
 document.write(kelime.toLowerCase()+"<br>")
 //S-4) bütün kelimeyi büyük harfle göstermek ?
 document.write(kelime.toUpperCase()+"<br>")
 //S-5) ilk harf nedir  ?
 document.write(kelime.startsWith('j')+"<br>")
 //S-6) girdiğiniz kelime java ile başlıyor mu  ?
 document.write(kelime.endsWith('h')+"<br>")
 //S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
 document.write(kelime.concat("ben js öğreniyorum")+"<br>")
 //S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
 document.write(kelime.substring(0,4)+"<br>")
 //S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?
 document.write(kelime.replace(kelime,yeni)+"<br>")