var target_date=new Date("Jun 15, 2018").getTime();var days,hours,minutes,seconds;var hitungmundur=document.getElementById("hitungmundur");setInterval(function(){var current_date=new Date().getTime();var seconds_left=(target_date- current_date)/ 1000;
days=parseInt(seconds_left/86400);seconds_left=seconds_left%86400;hours=parseInt(seconds_left/3600);seconds_left=seconds_left%3600;minutes=parseInt(seconds_left/60);seconds=parseInt(seconds_left%60);hitungmundur.innerHTML=days+" <span class=\'digital\'>hari</span> "+ hours+" <span class=\'digital\'>jam</span> "
+ minutes+" <span class=\'digital\'>menit</span> "+ seconds+" <span class=\'digital\'>detik menuju</span> <span class=\'idjudul\'>Idul Fitri 1436H / 2015</span>";},1000);