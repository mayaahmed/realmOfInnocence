
 var tableDiv = document.getElementById("tableOfContentsDiv");
Home = "<a href='index.html' class='tocLinks'> Home </a>";

chapter1 = " <br/> <br/> <a href='1eechamotta.html' class='tocLinks'>1. The fear of Eecha Motta  </a>";
chapter2 = " <br/> <br/> <a href='2stolentoy.html' class='tocLinks'>2. The Stolen Toy </a>";
chapter3 = " <br/> <br/> <a href='3tamarind.html' class='tocLinks'>3. The Tamarind tale  </a>";
chapter4= " <br/> <br/> <a href='4meangirls.html' class='tocLinks'>4. Mean girls </a>";
chapter5 = " <br/> <br/> <a href='5dress.html' class='tocLinks'> 5. The Dress disappointment </a>";





function toc(){
  tableDiv.innerHTML=Home+chapter1+chapter2+chapter3+chapter4+chapter5 ;}

toc();
