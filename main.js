var button = document.getElementById("button");
var id = document.getElementById("id");
var link= document.getElementById("link");
button.onclick=function(){
	var link_href = "https://clients2.google.com/service/update2/crx?response=redirect&prodversion=38.0&x=id%3D" + id.value + "%26installsource%3Dondemand%26uc";
	link.setAttribute("href",link_href);
		//alert(link_href);
}