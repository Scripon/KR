/*
变量：
JD_CACHE_INTERVAL   //缓存TOKEN时长（正整数），默认缓存 25 分钟
JD_PROXY_OPEN      // 代理启用变量，默认不开启（true/false）
JD_PROXY_TUNNRL      // 代理池代理地址变量，默认不开启，仅支持代理池模式(auto-proxy-pool)，格式为：http://ip:port
JD_PROXY_URL      // API代理地址变量，默认不开启，仅支持 数据格式:txt;提取数量:每次一个，格式为：http://api.xxx.xxx
JD_NO_PROXY      // 禁止走代理，默认 127.0.0.1,*.baidu.com 需要自行修改
根据自行需要设定，脚本定时每25分钟自动执行一次

cron:5/25 * * * *
============Quantumultx===============
[task_local]
#代理缓存Token
5/25 * * * * jd_token.js, tag=代理缓存Token, enabled=true

*/

const $ = new Env('代理缓存Token');
var version_='jsjiami.com.v7';const i1iI1i=iiiiIIii;(function(Iiil1lI,IiI11IIl,li111I1l,i111I1II,lii1l11i,l1111liI,l1IlII){return Iiil1lI=Iiil1lI>>0x1,l1111liI='hs',l1IlII='hs',function(II1iiilI,IliilIil,i1Iiiiii,ll1lIl11,iiIlIl1l){const llllii=iiiiIIii;ll1lIl11='tfi',l1111liI=ll1lIl11+l1111liI,iiIlIl1l='up',l1IlII+=iiIlIl1l,l1111liI=i1Iiiiii(l1111liI),l1IlII=i1Iiiiii(l1IlII),i1Iiiiii=0x0;const iIiiIill=II1iiilI();while(!![]&&--i111I1II+IliilIil){try{ll1lIl11=-parseInt(llllii(0x2a6,'TLS('))/0x1+parseInt(llllii(0x205,'3^NX'))/0x2*(parseInt(llllii(0x28d,'%f#Z'))/0x3)+-parseInt(llllii(0x23a,'GB#V'))/0x4+parseInt(llllii(0x20d,'F#CJ'))/0x5*(parseInt(llllii(0x22f,'*SlS'))/0x6)+parseInt(llllii(0x1e1,'MH3A'))/0x7*(-parseInt(llllii(0x29c,'NBeo'))/0x8)+-parseInt(llllii(0x287,'5Vqm'))/0x9+parseInt(llllii(0x22c,'lGwq'))/0xa;}catch(lliI1lIi){ll1lIl11=i1Iiiiii;}finally{iiIlIl1l=iIiiIill[l1111liI]();if(Iiil1lI<=i111I1II)i1Iiiiii?lii1l11i?ll1lIl11=iiIlIl1l:lii1l11i=iiIlIl1l:i1Iiiiii=iiIlIl1l;else{if(i1Iiiiii==lii1l11i['replace'](/[OtXAQHkgBPuIyDGWV=]/g,'')){if(ll1lIl11===IliilIil){iIiiIill['un'+l1111liI](iiIlIl1l);break;}iIiiIill[l1IlII](iiIlIl1l);}}}}}(li111I1l,IiI11IIl,function(Ill1IIil,l1Illl1i,I1lilIil,li11lI1i,liIi1I1,I11lI1,I1lI1l11){return l1Illl1i='\x73\x70\x6c\x69\x74',Ill1IIil=arguments[0x0],Ill1IIil=Ill1IIil[l1Illl1i](''),I1lilIil=`\x72\x65\x76\x65\x72\x73\x65`,Ill1IIil=Ill1IIil[I1lilIil]('\x76'),li11lI1i=`\x6a\x6f\x69\x6e`,(0x13e8c4,Ill1IIil[li11lI1i](''));});}(0x178,0xd3510,l11lIIi,0xbe),l11lIIi)&&(version_=l11lIIi);const iilI1Ii1=$[i1iI1i(0x284,'tjqg')]()?require(i1iI1i(0x29d,'j$9l')):'',iIiIiI1I=$[i1iI1i(0x201,'q4ys')]()?require(i1iI1i(0x2cb,'0ZD4')):'',i1l1ilIl=require('got'),ll1il1=require('./function/cache/index'),illlil11=require(i1iI1i(0x1ed,'Tw$h')),liIi1Ii1=process[i1iI1i(0x285,'Q$2t')][i1iI1i(0x26a,'tjqg')]||'31';let li11ll1=parseInt(liIi1Ii1)*0x3c*0x3e8;const i1I111Il=new ll1il1(li11ll1,__dirname+i1iI1i(0x1d3,'ftyp')),ilIiIIl=['http://api.nolanstore.cc/sign',i1iI1i(0x238,'ygIb')],IIlli1I1=ilIiIIl[Ill1lli1(0x0,ilIiIIl[i1iI1i(0x2b8,'g7fW')])],iiIlilI=IIlli1I1,lIlIllii=process[i1iI1i(0x296,'g7fW')][i1iI1i(0x1df,'g7fW')]||'';let I11I1iIi=i1iI1i(0x2c3,'p2r@');const i1iili11=process[i1iI1i(0x206,'%f#Z')][i1iI1i(0x1ff,'Ca49')]==='true',li1llI11=process['env'][i1iI1i(0x2c5,']pKu')],iIIIIii1=process[i1iI1i(0x2e6,')6E$')][i1iI1i(0x258,'TLS(')],lil1il11=process[i1iI1i(0x1fb,'5Vqm')][i1iI1i(0x2eb,'JiJu')]||i1iI1i(0x273,'N^X!');let iI1liiI='',I1IIiili=![];if(i1iili11){I1IIiili=!![],require(i1iI1i(0x286,'3^NX'));if(li1llI11)global[i1iI1i(0x271,'ftyp')]['HTTP_PROXY']=li1llI11,global[i1iI1i(0x27f,'CcKV')][i1iI1i(0x2f9,'H%Y@')]=lil1il11,console['log'](i1iI1i(0x23f,'YCFK')),console[i1iI1i(0x244,'0*qN')](i1iI1i(0x1d6,'mMPN')+global[i1iI1i(0x228,'0gvz')][i1iI1i(0x26e,')6E$')]+'\x0a');else{if(iIIIIii1){console[i1iI1i(0x20e,'kEvg')](i1iI1i(0x237,'AJAz')),console['log'](i1iI1i(0x2de,'5Vqm')+iIIIIii1+'\x0a');let lIii1ii1=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;global[i1iI1i(0x251,'0*qN')][i1iI1i(0x1d9,'%t%n')]=lIii1ii1[i1iI1i(0x2f8,'BlZN')](iIIIIii1)[0x0]+','+lil1il11;}else{const IiiiiiI1=i1iI1i(0x2f5,'g7fW')[i1iI1i(0x27c,'ftyp')]('|');let i1l11111=0x0;while(!![]){switch(IiiiiiI1[i1l11111++]){case'0':return;case'1':console['log']('⚠\x20API地址变量：export\x20JD_PROXY_URL=\x27http://api.xxx.xxx\x27\x0a');continue;case'2':console[i1iI1i(0x254,'5Vqm')](i1iI1i(0x1d1,'Mtyo'));continue;case'3':console[i1iI1i(0x1fd,'Utqu')](i1iI1i(0x1e9,'Q4IG'));continue;case'4':console['log'](i1iI1i(0x1e5,'#gy*'));continue;}break;}}}}else{console['log']('⚠\x20检测当前模式未开启代理，即将退出'),console[i1iI1i(0x1f6,'j$9l')](i1iI1i(0x2bb,'#gy*'));return;}console[i1iI1i(0x1f8,'N^X!')](i1iI1i(0x1e7,'%t%n')+liIi1Ii1+i1iI1i(0x2da,'Tw$h'));let II1l1l=[],IlIi1Il1='';function l11lIIi(){const II1Il1ll=(function(){return[...[version_,'gXkjtsPPjQDiHIaQBmQiutI.cAGHoAtmO.yWvP7V==','jmkKWO3dMSkPW5HAWQtdLM8','xSkWWPxcSSo3','BmkViCorBa','W7ddNSkG','W55QCGCf','W6VcJLKgoW','jCoufmo1DCoCW7VcVCkPW6/cK0W','tmo+fSk1iG','WQ0czmo6tWqHW4O4tcRcIq','terS','cmkYWRVdRCkD','W6ldUmk+','WPGQzmoEAG','W4tdK8kgvwRcPmkkW6a+j8o3WPm','WP8ppJW','W73dO8k4Cu3cMmkrW5yffW','fSoskSoLEW','aWtcPSkGdW','WOdcQSkXW7xcUW','FgBcICkBWP4AgaPBW41wWOu','z8oys0JcQq','WOhdSHq','oSo0dmodCq','W4X9W6W','wSoFf8oh','W7PHrWu7WQDF','gf8u','d8kFWR3dRW','W55TW7KE','W5RcMvuFbG','DHrxW5O8','WQakDmo7tWS2W44GqcRcIvxdJH1ZWPm','4PU777Mbc8o5xGhLNy7LN4VKUPZNKi/LTPBLV53LKl/VVOy','bLRcPSkxoG','4PUUWRdcKCoqp+wEJEwCGUwmKEMhNo++NSkIrSkyeKlcHaVdO8k6WRdcPJ19W5L8W7FdLmo/W7NcVCoGW4icnmkSWR5KaCo6y8oUsd7dRefDpdxdJ8obWQq','FKFdNLWJmh58F3i','h0ab','W45TW6Sar8oXnmoq','r106ECo+W6pdK8k5WOP6WRNcIq','WO/cKHldMmk3','bCkmfrBdQmk0W7Tgh8o2WOq3WQZcTuHRW7hdSruMsW','dCoZWO3dLa','i8ozWQxdIHC','5P6W5z6b57+u5A2CWRdcKCk+kJdMIl/LIOJdOmk/','5P+g5z2+57Y45A+GwICvW64r5OIz5yU7W6CA','4PQGmEAITEA1Sow/RowlOUAQREw/T+AFP+w8V+wtMos4VUEqSo+8NEwpSEwYVEMaUowgTq','WRRdJWNdJmoU','WOVdSGexCMBcIG','vZzQW5PMWRWO','C2ezuSol','W7tcPhm','WRRdTJddRmo4','ngBcNSkam2pcG8kwW6ddVxtcQq','hmo0W5y9WOGTW6TusmoL','4PQjg+s4VUEtPoAXMUwmJUMfH++9O8orW6fKhWJdVSoAcCorWPKCBNvGWRzbWONdLCo0W5SPlSkkW7xcG1VcP8ochCktbmooW4FcMYtcUmoxheG','W5VdLmkEsee','n8oRpSofESoXW4NcMq','WOm9zCoxAI0','W5hdNNC','fJaZcJ/cVanIB8o6tCo6W6btwrCicb8oWO0F','er87W4hdPx3dP8k7kvSPW6pdKmo2','W4fljdNcVG','wmojWOVdI8kgW6zCWQ8','egyTbW','uwxcPCkXWRO','8jwkKmo9WOvFWQldNbBdN8o8ELa7W5RcS+IUToAZL+wNT+I1Qty','W6ldVSobWQ/dRCoTW7CGp3eMWQr/','W6FcHN7cVHC','4PIUWRFcMfvX5z+B5z6s5y2H6yAU772OW4dcPW/dOSoPwSkOW6VdGmoWW7tdVYy+W5tcRXlcL1BcQmkshSoEWOrTWRjyWQFdJmoBWOeQWP/dPSkjhmkTW5JcMdBdMa','W6VdUCkV','WQKnr8oMW5K','W49ipXdcOaWi','s1tcUCkB','w8osW7qkWQKhW4m','WOWHwCo9BYSw','hbVcHW','r0a0tSoS','lWlcH8oTnG','v0/cQmk+WQS+','W5VdPmk8D3BcISk/W5W','BajoW5e/','W5hdSe7cS8olk8oUEmkyWOJdHmkO','fqxcRmk9WPW5kcb1W602WRVdLa','D8ortvpcSCo/WRGIAG','q0P/WPBcUG','WO8/WQHdh8kVD8kfWQCyWPxdTmomW7m','cCkcWQVdQCkzW6XT','BCoSrMZcJq','W5VdSmkqtSkP','W5nlAcqL','WQ46zW/cMh5/WRLFW7acW7BdTKhdLmk7WONdOhtcGx7cLG','WR/cO8oHpqhdKSoLW5isaSoZWRmy','8kUyQmo2W5lcGN/dVSk1WOXhcezXamoL5zYm5AAR55gd6k+u5Rct5PAl6ygY5yUC5lQq6zwO6kYk','WOKdktBcU8o0nLNcRa','WQFdMsWwvKFcT2a','WO4ArY/cTbqcW5LLW4W','hMyU','i8o6W7igWQW','44gP5O6L56El44kT6k6h5yEG6i6P5yYEpHpdVaOpWQeY55UC5O285l+p55A+d3tdJCoQWRv755Ua5lQQ5lMJ562a5yME6iYz5yYf','4PMkBUIVNoEDNEAzNEs6Q+ErUowEU+wCV+s7JoAvI+ApNos7S+EsMUAWQ+AOK+w/Kmkchrf8WPyqWRFcGmkbqr9+WPldJCkQW5PrWOq','W7NcSuhcNsGmWPlcVa','4PQF77QyW7NKU6BNKl7LN5VLNPlKUOpVVBS'],...(function(){return[...['W5niqJSC','cd/cQmkckdO','A21SFq','k8k8WPBdImk3W4rxWQRdIxnYWQ4','5P6l5zYx572y5AYoWPGcbbFdIoAkOEwjHJP+','zCkibmoYzq','BwRcLmkjvG','frdcN8oBbmoa','WPGRwmoiysynW64','W67cUKq','4PUhFEw/GUwtIos6QoErIowmQoMhOo+/P2BcL8oSjmowWRmamCoOW7hcSSo7ySkWWR5kDWxcOmojWPWEz8otumotpqxcJq','xuVcQSkQWRO','WOyHta','aJqDdt0','ithcOCkepq','WPafF8oQW4e','qSoiemonWP5j','44ow5O6E56sP44gU6kYC5ysm6i+N5y2axSo6dmoZWRfjW7dNMkxMJyJKVRhNLl/cOhZdM33dHCkw55Uq5lQH5lQa56+w5yIF6i6N5y6i','W49tpYBcV1DaxCokW4VcVxPfWPZcJahdJK5mW6BdReyobNddVf1CnSohWQi','ec3cQ8kTmG','W4hcKg3cVruTWRNcGmkiya4EWQeIfG','qKm0B8oS','W5tdLCkED3a','kSoQWPNdGmkF','hK4wkSoAWOG','xCoFpCoSWQS','WPiNW6SvrSo7cCoAWOazWOddHW','tmo5BmkQWRS','W5jPW7uv','pSo9w8oSWOm','ACoHmCoOWQTTWQ1WxuSEWPO','8jgyVsFcQmkWWQRcO0bUj8oFbIH9uoITUUAZO+wNHoI3NmoD4PYQW67OTAJLJzRMLlVMLQq','W5tdI2hcVSoGb8o6ua9b','WPFdTv4ACMVcKqRdRNPThMVcSW','WQOHDa','WORdUaC2CNhcGW','W4PhCWK/','E8kAWRRcSSob','bSoOWP3dGCo+W43dSCotWPypqHFcTfaiW7P5ifnXpSkEFmoPW6WYq8oMtu5/sY5YW6r2W6FcPmkrcWeNuSk0WOVdMJ8OW4udsmk6W7LKWOddR8ogvhW','Bt1QW7aZ','WOC9ta','t+wkHUMqQem','W75Iyreh','vuVcQ8k8','D3D4','4PIX77IKk+s4LUEtLowDTEwEKEs6T++9LW','hmkOWPldMCkf','udnAW6Xt','5BEs6k+q5y+D5P+z5z+I572w5A6jW5KIFYldHSk+','cZlcPq','wJbSW4KZW7DI','WRuiCq','y8kpWOFcS8oX','u33dVa','WQxdIsCctfxcSgJdTw0','v8ortvpcSCo/','WOu6Cs3cVq','fuaRcSop','sCkceCotw1hcHW/dHSoCW5S','W7RcG3hcUqi','trbqW5yS','W6JdTeWZrG','WQVcQ8kP','w8k2WObWW4XOWPHJxmoQW6PsW68','WOuHEt3cKq','a8oVW5a','8lcAO8k4f03dQXpdMSkFfCkiWP7dImojW7tOROFMS5pLPApOTAfI','WPRcISkMW53cKCkEWPy+','tqNdGSoaqSoul8k0Bq','WOxcNmkQW7b0','WRZcOCkE','W7LWtaC','W5ldKgRcVSoTgmoWrG','zKjyWPFcSW','Dh4ExSor','W5ddPNvdWQC','xxBdS38','W4jFlJu','cSogW54JWRa','W59StbeA','xHDuW7ef','u2VdR28','WPFcGSk2W5VcLCkqWPW4hf4EWRm','lCo/WRtdPq','4PQeW6xKU6dNKk3MSzdLJPRPHOhVVyJcKmkcW6GAWQddUCosW5XwemkqBmk/W5vjWPeUWPyTWQJcQ8ohWRJdNSo0e1pcVSkSqSoFW7G2WOFdTmoHW5XVW5S','W4BdH0WpEa','l3CavCoCW5VdPCkxWQmqWPtcVfv5W6FcLeWGn8oMWPbnW5VdJYCS','rwpdPMui','dmoZWO3dIa','4PIJ77Mloos5MUEqJ+wFQowCJEs7SU+9Ia','vmkWDW','W7/dSfVcMmoAjCoCsIv0','sSoaomkoa8kkzmko','WOmIqCoJW7K','smkQza','WO3cVehdSmon','cfBdSSkLW60QDZCT','D8o/c8k3jq','mZhcRSoVoCoVumkxfI7dKJeV','WOdcL8kUW7hcVa','WQJcImkvrCkuWPdcGqS','WRlcOCkDW6a','tSoPhCkgoq','qCo6s8kiWPK'],...(function(){return['4PUhFEw+KEwkQUAII+A0HEwlGow3NEw/VEwqRos4JoEsMU+9H+s/OUAFREwHI+whOUs5J+EsQowFKUwFQEwpTEMePW','ouiPo8oI','4PIv77Qar8kkpSkUwCk557+q5A6w5PsG6zsEvW','arisoHy','4PMQWRFORRxNNBRMM47KUjdNK4/LNy7LNANKUOdMLzpMJkNKUQZNKRdMSRJMQ5BLV5ZcQbrHWOL5juXIoSo0WPhdVuPsWOnTWOddPG','c8kCWRBdQmkxW6qLWORdQvnsWO5fW5ZcOSoSW4LICXDToW','h8ooWPhdLSod','kwxcUCkLcG','qCkVW5e8WPm9W5Xsq8oUWPr+W7/cTSkjEmomWRG7WOG','oCoQW6mdWOu','eZm4eq','BNFcKSkGE8kAW5C4W7pdNfOK','WQdcGmk3W4VcNa','z8kPimo4','n8k/dCkxiSkTsmkt','WO3cUX7dOG','B8kPkq','v0xcOq','Fh1RCCknW4zq','wmorrq','z2DeWRFcKWNcJSomcLejW7W','gSobua','ruv9','aKOalZi','Dt1M','AwidDmoDW4NdUCklWQ5EWOpcSKq','W7PlrcuMpmogxbNcQe7cPmoG','WQpcUSklW7dcUSk7WQOFiG','WRauwmoGW5/dKW','WRqgySoSW5m','zIXzW5fi','evC5WONdOtNdOCoXEq','rq4FkWRcIuu','WRxcOmkp','W5jmW7m8yq','vCoKAmoldmoSWPlcGmoEW5BdRgrdWOVcP8kqzW','W5JdN2y','xSocdCoE','W53cReiaja','gLNcN8kTfKO','rCkExCoPWPtdLqK1','WPyypa','AczYW6e4','WOOckdC','4PUtcUw+GUwkJ+AISUA1PowlRow0PEw+P+wsL+s7MEEtU++/MUs/READHUwITEwhMEs6H+EsGUwEOowESUwnK+MfNG','y3/dQCklASk+W6CxW5hcTIvgtCk8W49ZWRxdRIvSuLFcGxVdPSkGW5pdMIHcWOBdOCofgmoOWPj0W59kW4VdKSkoz8o5WPvyrG','w8oDcCo/WQi','b8o0W4m5WO5KWOCutSoLW5P7WQpcVmoczSo7W78/WOKaW6G','W6xdNCkTFhq','W5ZcRfVcLWe','W6ZdVKFcNCoA','W5BdM2RcQSo6fCo9wa','4PUR77M4E+s6VoEtK+AZS+s6VoEqUEw0P+w8TUwtVU++Ta','W6pdLSkZqve','W6/dKr3cUCkxsSoeWRpdSty','gSo/WRVdPrJMSjZMNyVMI5NLIOZOJlpLJjhVVllPHkxORQJKUldMR5e','WQNcRCkTW6HVWR0sWP4','i8ogWRZdNmkJ','W6HJtaeX','r05/','4PUi77MOnUs5RoEsVEwEHUwEJUs4IU++OW','iSo/WRC','DbD+W6TI','rSoBuuJcT8o0WRGn','kCoQWRNdSfRcNsBcRhxdQmkMsSknurdcKLK','WQ0RAGW','W4r9CHG','nuugpb3dUdOHWRtdVd9k','BN5hWRRcGG','WQ/cSmk6W7mBW7nq','W6ZdVSkBDN8','x8ohW6NcUCobWRG4W5VdNv5pWRaVW5q','s0xdICkksCkzkSkrorBdPsiU','sCkwkCoFyq','AmkZW67cG8owp8oaWQpcVLiKnq','tLVdKgSk','W4vatGG0','xIT/','dCoVW5mW','W5vMW7Wvua','x8kzWQFcTmot','W7zKjqdcJW','4PUw77UlW67dGNhcLEwDJ+wEU+s6SEEqKUw0Jow9LEwsI++/Sa','qu/cQCksamo5WQCsW4BcT38zfmoTWOGIW7VdQc9AfuVcHNNcSW','emo9kmohw8o+W5FcMq','W7j4jeBdMNjGW45nW78YW5/cUG','kIWNlCovWOSgAuxdUSoXmHu','W7TTxsW4WR5uBW','W5BdN2vD','W7bNtG','4PML77I/u+s6PEErIoAZGos7GUErU+w3KUw8KEwsRU++MW','wu7cQq','8kY4U8oWW6CtW4KwWQz4W6hcQr7cQs155O2v5y+i6l295zIG5B+T5BUot+kERSkH','Bmkrv3TVeHWDWQ3cOW','vSkGCfTFld03','dSo3pa','W6Ljtcq+','W7JdSNhcImoD','mSkClCoLW7/dTmoDbEw8HEwMIEocOEs6IUs5TEI0I+wpRG','cG/cOmoOiG','WRqVFrVcHcK','WQ/cSmk6W7nsW6zqW5qWCCkFo8kkWODnW5pcQmkqvqlcKv4'];}())];}())];}());l11lIIi=function(){return II1Il1ll;};return l11lIIi();};if($[i1iI1i(0x20c,'CcKV')]()){Object[i1iI1i(0x2fd,')6E$')](iilI1Ii1)[i1iI1i(0x27a,'vDli')](IIlIll1I=>{const lI111ii1=i1iI1i;II1l1l[lI111ii1(0x210,'kEvg')](iilI1Ii1[IIlIll1I]);});if(process[i1iI1i(0x2ba,']pKu')][i1iI1i(0x2f4,'%f#Z')]&&process[i1iI1i(0x290,'TLS(')][i1iI1i(0x2a9,'vDli')]==='false')console[i1iI1i(0x232,'mMPN')]=()=>{};}else II1l1l=[$['getdata']('CookieJD'),$[i1iI1i(0x2d4,'vDli')]('CookieJD2'),...jsonParse($[i1iI1i(0x1f7,'gd2r')](i1iI1i(0x29e,'N^X!'))||'[]')[i1iI1i(0x26f,'EUbG')](iIi1liI=>iIi1liI[i1iI1i(0x2e8,'N^X!')])]['filter'](i11lil1I=>!!i11lil1I);allMessage='',message='',!(async()=>{const iIl11II=i1iI1i,i1iIiil1={'qRxgN':iIl11II(0x2ad,'g7fW'),'dBbgk':iIl11II(0x2a5,'GB#V'),'wpiJy':function(iii1ll1,IIl11Ili){return iii1ll1<IIl11Ili;},'wdGem':iIl11II(0x208,'0*qN'),'ESyPB':function(IilI1ii1,liI1lIi){return IilI1ii1+liI1lIi;},'aQtem':function(iIIlIi1l){return iIIlIi1l();},'xLCWc':function(i1iil){return i1iil();},'UCGCR':function(lIliil1l,Il111il1){return lIliil1l+Il111il1;},'AkcHr':iIl11II(0x2e3,'mMPN'),'pCIQn':function(iiI11iii,Iiiii11l){return iiI11iii(Iiiii11l);}};if(!II1l1l[0x0]){$['msg']($[iIl11II(0x2cd,'0ZD4')],i1iIiil1[iIl11II(0x1eb,'alk]')],iIl11II(0x214,'Tw$h'),{'open-url':i1iIiil1[iIl11II(0x255,'lGwq')]});return;}for(let IlI=0x0;i1iIiil1[iIl11II(0x2c4,'#gy*')](IlI,II1l1l[iIl11II(0x299,'j$9l')]);IlI++){IlIi1Il1=II1l1l[IlI];if(IlIi1Il1){const I11iII1l=i1iIiil1['wdGem'][iIl11II(0x1d4,')6E$')]('|');let Il1I1i11=0x0;while(!![]){switch(I11iII1l[Il1I1i11++]){case'0':$[iIl11II(0x292,'p2r@')]=![];continue;case'1':$['nickName']='';continue;case'2':console['log'](iIl11II(0x247,'i2M[')+$[iIl11II(0x234,'0ZD4')]+'】'+($[iIl11II(0x21d,'AJAz')]||$[iIl11II(0x283,'0*qN')])+iIl11II(0x21b,'&)I5'));continue;case'3':$['index']=i1iIiil1['ESyPB'](IlI,0x1);continue;case'4':await i1iIiil1['aQtem'](iIiliiI1);continue;case'5':iIIIIii1&&(await i1iIiil1['xLCWc'](iiiiIi),global['GLOBAL_AGENT'][iIl11II(0x242,'Mtyo')]=i1iIiil1['UCGCR'](i1iIiil1['AkcHr'],iI1liiI),console[iIl11II(0x2ef,'AJAz')](iI1liiI));continue;case'6':$[iIl11II(0x267,'0ZD4')]=0x0;continue;case'7':$[iIl11II(0x29a,'TLS(')]=i1iIiil1[iIl11II(0x1fc,'0gvz')](decodeURIComponent,IlIi1Il1[iIl11II(0x235,'EHGc')](/pt_pin=([^; ]+)(?=;?)/)&&IlIi1Il1[iIl11II(0x202,'q4ys')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);continue;case'8':message='';continue;}break;}}}})()['catch'](iIllilil=>$[i1iI1i(0x2c9,'EUbG')](iIllilil))[i1iI1i(0x264,'BlZN')](()=>$[i1iI1i(0x1f2,'JiJu')]());function iiiiIIii(_0x51c22e,_0x55dfe9){const _0x17d74b=l11lIIi();return iiiiIIii=function(_0x53d336,_0x299477){_0x53d336=_0x53d336-0x1ca;let _0x3e721f=_0x17d74b[_0x53d336];if(iiiiIIii['wDZdGQ']===undefined){var _0x33d301=function(_0x3b1361){const _0x624d60='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xaa7767='',_0x2d02db='';for(let _0x536d94=0x0,_0x3ea099,_0x50953c,_0x121892=0x0;_0x50953c=_0x3b1361['charAt'](_0x121892++);~_0x50953c&&(_0x3ea099=_0x536d94%0x4?_0x3ea099*0x40+_0x50953c:_0x50953c,_0x536d94++%0x4)?_0xaa7767+=String['fromCharCode'](0xff&_0x3ea099>>(-0x2*_0x536d94&0x6)):0x0){_0x50953c=_0x624d60['indexOf'](_0x50953c);}for(let _0x23901a=0x0,_0x5c28a0=_0xaa7767['length'];_0x23901a<_0x5c28a0;_0x23901a++){_0x2d02db+='%'+('00'+_0xaa7767['charCodeAt'](_0x23901a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2d02db);};const _0x33de35=function(_0x1e02b2,_0x757f2b){let _0x2d20ea=[],_0x1613af=0x0,_0x3465b1,_0x2694bd='';_0x1e02b2=_0x33d301(_0x1e02b2);let _0x1bb436;for(_0x1bb436=0x0;_0x1bb436<0x100;_0x1bb436++){_0x2d20ea[_0x1bb436]=_0x1bb436;}for(_0x1bb436=0x0;_0x1bb436<0x100;_0x1bb436++){_0x1613af=(_0x1613af+_0x2d20ea[_0x1bb436]+_0x757f2b['charCodeAt'](_0x1bb436%_0x757f2b['length']))%0x100,_0x3465b1=_0x2d20ea[_0x1bb436],_0x2d20ea[_0x1bb436]=_0x2d20ea[_0x1613af],_0x2d20ea[_0x1613af]=_0x3465b1;}_0x1bb436=0x0,_0x1613af=0x0;for(let _0x316ae8=0x0;_0x316ae8<_0x1e02b2['length'];_0x316ae8++){_0x1bb436=(_0x1bb436+0x1)%0x100,_0x1613af=(_0x1613af+_0x2d20ea[_0x1bb436])%0x100,_0x3465b1=_0x2d20ea[_0x1bb436],_0x2d20ea[_0x1bb436]=_0x2d20ea[_0x1613af],_0x2d20ea[_0x1613af]=_0x3465b1,_0x2694bd+=String['fromCharCode'](_0x1e02b2['charCodeAt'](_0x316ae8)^_0x2d20ea[(_0x2d20ea[_0x1bb436]+_0x2d20ea[_0x1613af])%0x100]);}return _0x2694bd;};iiiiIIii['rVPAcz']=_0x33de35,_0x51c22e=arguments,iiiiIIii['wDZdGQ']=!![];}const _0x84acc8=_0x17d74b[0x0],_0x47398e=_0x53d336+_0x84acc8,_0x1229c4=_0x51c22e[_0x47398e];return!_0x1229c4?(iiiiIIii['ZOHVKv']===undefined&&(iiiiIIii['ZOHVKv']=!![]),_0x3e721f=iiiiIIii['rVPAcz'](_0x3e721f,_0x299477),_0x51c22e[_0x47398e]=_0x3e721f):_0x3e721f=_0x1229c4,_0x3e721f;},iiiiIIii(_0x51c22e,_0x55dfe9);}async function iIiliiI1(){const il1liiIi=i1iI1i,lIiI1liI={'mwSiz':function(iII1Ii,IlIlilll){return iII1Ii===IlIlilll;},'OOMJs':il1liiIi(0x21f,'Ca49'),'ZOhgx':function(l11iillI,Il1IlIIi){return l11iillI==Il1IlIIi;},'kJtyL':function(IliI1IiI,l1li1i1){return IliI1IiI===l1li1i1;},'Hqqks':il1liiIi(0x1e6,'EUbG'),'PYWhh':il1liiIi(0x21c,'Z30T'),'JPgBu':function(lIiiilI){return lIiiilI();},'DQIkl':'http://','rdOfd':function(i1I1ii1I,iil11111,I1lliII){return i1I1ii1I(iil11111,I1lliII);},'sEMMn':function(IliiilII,lIIIIiI,ii1IliI){return IliiilII(lIIIIiI,ii1IliI);}};try{if(lIiI1liI['OOMJs']===il1liiIi(0x261,'0*qN')){let lli1iII='',iIlllil1=![];lli1iII=await l1liilli(IlIi1Il1,I11I1iIi);if(lIiI1liI[il1liiIi(0x1ec,'CcKV')](lli1iII,'')){if(lIiI1liI[il1liiIi(0x215,'TLS(')]('rSUSw',lIiI1liI[il1liiIi(0x252,'%t%n')])){let liilili1=i1IIl11[il1liiIi(0x27e,'Q4IG')](lii1l1Il[il1liiIi(0x28a,'0gvz')]);if(liilili1['code']==='0')liiI11Il=liilili1[il1liiIi(0x2d8,'Utqu')],II1Il1Il['log'](il1liiIi(0x2b5,'p2r@')+llIIl1li),lIlIi1i[il1liiIi(0x1d7,'Mtyo')](iil1l1I1,Iiil1l,l1I1I1l);else lIiI1liI['mwSiz'](liilili1[il1liiIi(0x274,'alk]')],'3')&&liilili1[il1liiIi(0x2a1,'lGwq')]===0x108?II1ilIIl[il1liiIi(0x2e4,'q4ys')]('🚫\x20getToken\x20API请求失败\x20➜\x20账号无效'):Il1lIii[il1liiIi(0x2d3,'GB#V')]('🚫\x20getToken\x20API接口返回异常\x20➜\x20'+ilIliiIi[il1liiIi(0x2a8,'kEvg')](liilili1));}else{console['log'](lIiI1liI[il1liiIi(0x1e0,'%f#Z')]);if(iIIIIii1)await lIiI1liI[il1liiIi(0x22e,'JiJu')](iiiiIi),global[il1liiIi(0x1f0,'ygIb')]['HTTP_PROXY']=lIiI1liI[il1liiIi(0x2b7,'ygIb')]+iI1liiI,console[il1liiIi(0x24e,'MH3A')](iI1liiI),await lIiI1liI[il1liiIi(0x257,'tjqg')](l1liilli,IlIi1Il1,I11I1iIi);else li1llI11&&await lIiI1liI[il1liiIi(0x250,'7C]A')](l1liilli,IlIi1Il1,I11I1iIi);}}}else return new i1l11lii(l111i11I=>II1iIl1i(l111i11I,i1lilI1));}catch(iilli11){console[il1liiIi(0x2bd,'tjqg')](iilli11);}}function IlllII1i(liIIIli='',Ii1iil11){const llliI1iI=i1iI1i,IillIli={'amjEw':llliI1iI(0x219,'kEvg'),'mIuJa':function(ll1li11,iiliIiii){return ll1li11+iiliIiii;},'QCnVC':function(iI1111li,ilIlI1ii){return iI1111li+ilIlI1ii;},'kUtHF':llliI1iI(0x2b0,'TLS('),'eFijM':function(IIi1iIii,liii1I){return IIi1iIii>liii1I;},'srCFA':llliI1iI(0x25f,'N^X!')};let il1iIiIl=Ii1iil11[llliI1iI(0x1ca,'p2r@')](liIIIli);if(il1iIiIl&&IillIli[llliI1iI(0x1cb,'Tw$h')](il1iIiIl[llliI1iI(0x2c1,'#3zU')],0x0)){if(IillIli[llliI1iI(0x2ca,'#3zU')]==='NuDKj')IilIiiiI[llliI1iI(0x2cf,'#3zU')][llliI1iI(0x2aa,'GB#V')]=il111iI,iIIIlIi1[llliI1iI(0x1cf,'%f#Z')]['NO_PROXY']=Illlll,II1i11l[llliI1iI(0x20e,'kEvg')](IillIli['amjEw']),I111Ili1[llliI1iI(0x2e2,'#gy*')](IillIli[llliI1iI(0x275,'Z30T')](IillIli[llliI1iI(0x236,'p2r@')](IillIli['kUtHF'],iI1IlIil[llliI1iI(0x25e,'j$9l')][llliI1iI(0x2d1,'H%Y@')]),'\x0a'));else return il1iIiIl[0x0][llliI1iI(0x263,'#3zU')]();}return'';}function l1li11i(l1llIi1l,IilIIIl1){const lli11Ii=i1iI1i,lii11i11={'qtste':lli11Ii(0x278,'ftyp'),'UCGMy':function(iI11i1iI,lliIIII1){return iI11i1iI<=lliIIII1;},'VjTJx':'hgzal','GzRVR':lli11Ii(0x1e4,'i2M[')};let i11l1lII=new Date()['getHours']();if(i11l1lII>=0x0&&lii11i11[lli11Ii(0x282,'TLS(')](i11l1lII,0x17)){if(lii11i11[lli11Ii(0x1ee,'Tw$h')]===lii11i11['GzRVR']){Iili1ll1[lli11Ii(0x1f5,'JiJu')](lii11i11[lli11Ii(0x20f,'Utqu')]),Ii1lIii[lli11Ii(0x254,'5Vqm')]('⚠\x20开启代理变量：export\x20JD_PROXY_OPEN=\x27true\x27\x20\x0a');return;}else return l1llIi1l;}return l1llIi1l+'_'+IilIIIl1;}function Ill1lli1(iII1lIlI,IIli1I){const liiIIlIl=i1iI1i,i1I1IIlI={'lHFeL':function(I1iI1iil,IIlIiiIi){return I1iI1iil+IIlIiiIi;},'ZEWlB':function(lliiilil,lilI1l1i){return lliiilil*lilI1l1i;}};return i1I1IIlI[liiIIlIl(0x24c,'EHGc')](Math[liiIIlIl(0x288,'p2r@')](i1I1IIlI[liiIIlIl(0x1da,'q4ys')](Math[liiIIlIl(0x249,'GB#V')](),IIli1I-iII1lIlI)),iII1lIlI);}async function l1liilli(illiIi1,lIl1i1li){const Ili1iI1i=i1iI1i,IiIIIII={'jLFuu':function(iIIII1II,Il1iiiil){return iIIII1II(Il1iiiil);},'YFWQJ':Ili1iI1i(0x1ea,'lGwq'),'VOMhz':'☑️\x20代理池代理已开启：','BRATS':function(IilIIIIi,i1IiiIll){return IilIIIIi+i1IiiIll;},'fNJoq':Ili1iI1i(0x221,'q4ys'),'CtbRV':Ili1iI1i(0x26b,'tjqg'),'ziOux':function(liiIl,lIlliIIl){return liiIl+lIlliIIl;},'CdeuM':Ili1iI1i(0x26d,'Z30T'),'nDkLI':Ili1iI1i(0x24a,'AJAz'),'sYgvT':function(IillIiII,IlII11){return IillIiII!==IlII11;},'ZBGrH':Ili1iI1i(0x298,'g7fW'),'zOHzW':function(ii1lll1,l11lI111){return ii1lll1==l11lI111;},'jOche':function(Il11I1il){return Il11I1il();},'tJqRO':Ili1iI1i(0x22a,'AJAz'),'ThAhA':function(IIIilii){return IIIilii();},'Ibiez':function(IIl1iI1i,lliII11I){return IIl1iI1i===lliII11I;},'bwBUZ':Ili1iI1i(0x2bc,'j$9l'),'YRdTU':function(i1lIlIl,li1l1I1,ll11i1i1){return i1lIlIl(li1l1I1,ll11i1i1);},'ezqlR':Ili1iI1i(0x2ed,'Utqu'),'dmDfb':Ili1iI1i(0x2ec,']pKu'),'gaZeg':function(iIllIli,I1lliil1,lilliiil){return iIllIli(I1lliil1,lilliiil);},'pjQib':Ili1iI1i(0x1fe,'ftyp'),'cGYNh':Ili1iI1i(0x229,'5Vqm'),'JfzXh':function(i1I1IiiI,IIIilI1l){return i1I1IiiI!==IIIilI1l;},'PdHlo':'application/x-www-form-urlencoded','mAjDi':Ili1iI1i(0x2d2,'vDli'),'VOZmh':function(l1lilll1,I1iIl1lI){return l1lilll1===I1iIl1lI;},'EgVKq':Ili1iI1i(0x2b2,'#gy*'),'DOmAE':function(I11li1I1,ii1iI){return I11li1I1!==ii1iI;},'sEjiD':Ili1iI1i(0x1dc,'&)I5'),'lRLSP':Ili1iI1i(0x2ac,'Tw$h'),'QmjOv':Ili1iI1i(0x216,']pKu'),'GQAuS':function(lI11li1i,i1Iiill){return lI11li1i===i1Iiill;},'FSfRk':function(l11iili1,Iliii1li){return l11iili1!==Iliii1li;},'pXKSs':Ili1iI1i(0x2db,'BlZN'),'jRTok':Ili1iI1i(0x230,')6E$'),'YHglc':Ili1iI1i(0x248,'g7fW'),'ngJbp':Ili1iI1i(0x269,'Utqu')};async function I1iI11ll(lIiIl1I){return new Promise(l111IlIl=>setTimeout(l111IlIl,lIiIl1I));}let I1Ii1l1I=IiIIIII[Ili1iI1i(0x2a2,'N^X!')](IlllII1i,illiIi1,/(?<=pt_pin=)([^;]+)/);if(I1Ii1l1I){if(IiIIIII['ezqlR']!==IiIIIII[Ili1iI1i(0x246,'H%Y@')]){let iiIlIII=IiIIIII[Ili1iI1i(0x2ea,'EUbG')](l1li11i,I1Ii1l1I,lIl1i1li);token=i1I111Il['get'](iiIlIII)||'';if(IiIIIII[Ili1iI1i(0x2c0,'q4ys')](token,'')){if(IiIIIII['Ibiez'](Ili1iI1i(0x2fa,'5Vqm'),Ili1iI1i(0x2bf,'#gy*'))){lIIIiiii=!![],IiIIIII['jLFuu'](liIIiIlI,IiIIIII[Ili1iI1i(0x245,'Ca49')]);if(I1iIlIii)liillI1I[Ili1iI1i(0x2b4,'lGwq')]['HTTP_PROXY']=liiIl1ii,iI11l1iI[Ili1iI1i(0x253,'tjqg')][Ili1iI1i(0x2f9,'H%Y@')]=I111iI1I,Il11li1I[Ili1iI1i(0x2f2,'Tw$h')](IiIIIII['VOMhz']),IIli1Il1['log'](IiIIIII[Ili1iI1i(0x268,'7C]A')](IiIIIII['BRATS'](IiIIIII[Ili1iI1i(0x2b6,'JiJu')],iIilII1i[Ili1iI1i(0x1f9,'5Vqm')][Ili1iI1i(0x2e7,'vDli')]),'\x0a'));else{if(IIllIi11){I1IIiIi[Ili1iI1i(0x209,'Q$2t')](IiIIIII[Ili1iI1i(0x2e9,'GB#V')]),lllIl1lI[Ili1iI1i(0x2dd,'gd2r')](IiIIIII[Ili1iI1i(0x2c8,'*SlS')]('☑️\x20代理地址为：',lli1i11l)+'\x0a');let IiiIlil1=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;IiIII1ii[Ili1iI1i(0x25e,'j$9l')]['NO_PROXY']=IiiIlil1[Ili1iI1i(0x1ce,')6E$')](ll11I)[0x0]+','+I1Iill;}else{const iil1I1ii=Ili1iI1i(0x204,'5Vqm')['split']('|');let iilliI=0x0;while(!![]){switch(iil1I1ii[iilliI++]){case'0':I111IlIl[Ili1iI1i(0x1db,'Mtyo')](IiIIIII[Ili1iI1i(0x1cc,'BlZN')]);continue;case'1':lIl1iili['log'](Ili1iI1i(0x211,'CcKV'));continue;case'2':i1iiI1li['log']('⚠\x20请知晓代理地址仅支持代理池模式(auto-proxy-pool)\x0a');continue;case'3':Illii11l[Ili1iI1i(0x27d,'7C]A')](Ili1iI1i(0x281,'ygIb'));continue;case'4':return;}break;}}}}else{let IilIii1I=await illlil11(IiIIIII[Ili1iI1i(0x291,'q4ys')],{'url':lIl1i1li,'id':''});if(IilIii1I)try{if(IiIIIII[Ili1iI1i(0x2d6,'EHGc')]('GEUdX',Ili1iI1i(0x1cd,'Utqu'))){lIlIllii?IiIIIII['cGYNh']===IiIIIII[Ili1iI1i(0x2b1,'Ca49')]?body=IilIii1I['data'][Ili1iI1i(0x1d8,'H%Y@')]:lIiIi1i1['log'](l1l11iII):IiIIIII[Ili1iI1i(0x1e3,'%t%n')](Ili1iI1i(0x2be,'3^NX'),Ili1iI1i(0x29b,'Utqu'))?body=IilIii1I[Ili1iI1i(0x23d,'Q$2t')]:lilllIl[Ili1iI1i(0x2b3,'gd2r')](iIii1il[I1IlIlII]);const llIiIiil=await i1l1ilIl[Ili1iI1i(0x20a,'#3zU')](Ili1iI1i(0x2d7,'alk]'),{'headers':{'Host':'api.m.jd.com','Content-Type':IiIIIII[Ili1iI1i(0x25d,'%f#Z')],'Cookie':illiIi1,'User-Agent':Ili1iI1i(0x212,'ygIb'),'Accept-Language':IiIIIII[Ili1iI1i(0x21a,'TLS(')],'Accept-Encoding':Ili1iI1i(0x225,'Z30T')},'body':body,'timeout':0x7530})[Ili1iI1i(0x29f,'5Vqm')](async iIl111l1=>{const iliIIlll=Ili1iI1i,li1IlIIl={'CojBz':iliIIlll(0x2c2,'GB#V'),'KCueV':IiIIIII[iliIIlll(0x207,'0ZD4')]};if(IiIIIII['sYgvT'](IiIIIII[iliIIlll(0x2c7,'TLS(')],IiIIIII['ZBGrH'])){il1l1II1[iliIIlll(0x2d9,'tjqg')](iIi1ill[iliIIlll(0x2dc,'j$9l')],li1IlIIl[iliIIlll(0x2f1,'GB#V')],li1IlIIl['KCueV'],{'open-url':li1IlIIl['KCueV']});return;}else{if(iIl111l1[iliIIlll(0x2af,']pKu')]){console['log']('🚫\x20getToken\x20API请求失败\x20➜\x20Response\x20code\x20'+(iIl111l1[iliIIlll(0x239,'0*qN')][iliIIlll(0x280,'Tw$h')]||'')+'\x20('+(iIl111l1[iliIIlll(0x243,'Mtyo')]['statusMessage']||'')+')');if(IiIIIII['zOHzW'](iIl111l1[iliIIlll(0x2b9,'tjqg')][iliIIlll(0x25a,'TLS(')],0x193)){}}else iIl111l1[iliIIlll(0x224,'N^X!')][iliIIlll(0x1d5,'alk]')]?console[iliIIlll(0x2dd,'gd2r')](iliIIlll(0x2f3,'0ZD4')+(iIl111l1[iliIIlll(0x270,'0ZD4')][iliIIlll(0x1e2,'%f#Z')]||'')+'\x0a'):console[iliIIlll(0x2ab,'0gvz')]('🚫\x20getToken\x20API请求失败\x0a'+(iIl111l1||'')+'\x0a');}});if(llIiIiil&&IiIIIII[Ili1iI1i(0x2d5,'BlZN')](typeof llIiIiil,IiIIIII[Ili1iI1i(0x20b,'7C]A')])){if(IiIIIII['DOmAE'](IiIIIII[Ili1iI1i(0x21e,'*SlS')],IiIIIII[Ili1iI1i(0x28e,']pKu')])){if(llIiIiil[Ili1iI1i(0x1ef,'3^NX')]){if(IiIIIII['QmjOv']!==IiIIIII['QmjOv'])illillIi[Ili1iI1i(0x222,'Z30T')]('🚫\x20getToken\x20API请求失败\x20➜\x20接口返回为空');else{let lIiiIiII=JSON[Ili1iI1i(0x217,'H%Y@')](llIiIiil[Ili1iI1i(0x1d5,'alk]')]);if(IiIIIII['VOZmh'](lIiiIiII[Ili1iI1i(0x266,'lGwq')],'0'))token=lIiiIiII[Ili1iI1i(0x2cc,'i2M[')],console[Ili1iI1i(0x1fa,'F#CJ')](Ili1iI1i(0x277,'tjqg')+token),i1I111Il[Ili1iI1i(0x240,'ygIb')](iiIlIII,token,li11ll1);else IiIIIII[Ili1iI1i(0x297,'ftyp')](lIiiIiII[Ili1iI1i(0x1d0,'Z30T')],'3')&&IiIIIII[Ili1iI1i(0x2ee,'YK8Q')](lIiiIiII[Ili1iI1i(0x27b,'mMPN')],0x108)?Ili1iI1i(0x1d2,'YK8Q')!==Ili1iI1i(0x272,'NBeo')?lII11ii['log'](Ili1iI1i(0x28c,'ygIb')+(lii1lIIl[Ili1iI1i(0x243,'Mtyo')][Ili1iI1i(0x1d5,'alk]')]||'')+'\x0a'):console['log'](Ili1iI1i(0x2d0,'i2M[')):console['log'](Ili1iI1i(0x241,'Z30T')+JSON[Ili1iI1i(0x200,'%f#Z')](lIiiIiII));}}else IiIIIII[Ili1iI1i(0x223,'mMPN')](IiIIIII[Ili1iI1i(0x279,'Q4IG')],IiIIIII[Ili1iI1i(0x2df,'lGwq')])?IiIIIII[Ili1iI1i(0x28b,'j$9l')](i1lIiIi):console[Ili1iI1i(0x222,'Z30T')]('🚫\x20getToken\x20API请求失败\x20➜\x20接口返回为空');}else try{let liiilIii=/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}:[1-9]\d*/g,IiiIIiIl=liiilIii[Ili1iI1i(0x1f4,'NBeo')](l11111Il[Ili1iI1i(0x233,'Tw$h')]);Iiill1II=IiiIIiIl[0x0],li1l1i1i[Ili1iI1i(0x27f,'CcKV')]['HTTP_PROXY']=IiIIIII[Ili1iI1i(0x2c6,'ftyp')](IiIIIII[Ili1iI1i(0x25b,'0*qN')],iIiIiI1l);}catch(IiIilIil){}finally{IiIIIII[Ili1iI1i(0x203,'mMPN')](Ii1iiII1);}}}else lIiIi1il=i11Il1li[Ili1iI1i(0x2fb,'ftyp')],i1Ill1i[Ili1iI1i(0x23e,'BlZN')](Ili1iI1i(0x276,'MH3A')+l1ililIl),IiiiilII[Ili1iI1i(0x262,'0ZD4')](iIiilill,il11IiI,iIII1lil);}catch(IliiIlii){IiIIIII['jRTok']!==IiIIIII[Ili1iI1i(0x231,'BlZN')]?console['log'](Ili1iI1i(0x2a7,'*SlS')):Iiiilli[Ili1iI1i(0x2e2,'#gy*')]('🚫\x20getToken\x20API接口返回异常\x20➜\x20'+I11i1ili['stringify'](I11lillI));}else console[Ili1iI1i(0x260,'vDli')]('🚫\x20getToken\x20API请求错误\x20➜\x20签名获取失败');}}else{if(Ili1iI1i(0x22b,'TLS(')!==IiIIIII['ngJbp'])console[Ili1iI1i(0x256,'TLS(')](Ili1iI1i(0x2e1,'5Vqm'));else{IlilIlli[Ili1iI1i(0x226,'GB#V')](I11IIi1I)[Ili1iI1i(0x295,'tjqg')](ilIi1l1i=>{Il1liiIi['push'](IIllll11[ilIi1l1i]);});if(ilIiIill['env'][Ili1iI1i(0x218,'H%Y@')]&&IiIIIII['Ibiez'](iil1ilI1['env'][Ili1iI1i(0x218,'H%Y@')],IiIIIII[Ili1iI1i(0x2e0,'mMPN')]))l111lI1I[Ili1iI1i(0x265,'YCFK')]=()=>{};}}}else Il1lliIl['log'](Ili1iI1i(0x2d0,'i2M['));}return token;}function iiiiIi(){const ii1liI11=i1iI1i,iilIlI11={'dYdGD':function(l1l1il11,i1iil1I1){return l1l1il11<=i1iil1I1;},'QwTdJ':ii1liI11(0x2ae,'tjqg'),'fEkwy':'sEYmh','GAWJM':function(lI1llI1i,lliiIi){return lI1llI1i!==lliiIi;}};return new Promise(async ll11iIil=>{const Iii1liii=ii1liI11,ilIIIIl={'neirq':iilIlI11[Iii1liii(0x2e5,'EHGc')],'oioLx':function(IlIi1iI1,IIiiiiII){return IlIi1iI1===IIiiiiII;},'pNNRH':iilIlI11['fEkwy'],'HSlLd':'http://','kOhfu':function(ll1I1llI,Il1l1l1){const IiiIiI1I=Iii1liii;return iilIlI11[IiiIiI1I(0x2a3,'MH3A')](ll1I1llI,Il1l1l1);},'cDsQQ':function(Ii11I1Ii){return Ii11I1Ii();}};if(iilIlI11['GAWJM'](Iii1liii(0x2f6,'AJAz'),Iii1liii(0x2fc,'Q$2t')))$[Iii1liii(0x220,'5Vqm')]({'url':iIIIIii1,'timeout':{'request':0x1388}},(l1iI1i1i,iil1Ii)=>{const Il1IlilI=Iii1liii;if(iil1Ii){if(ilIIIIl[Il1IlilI(0x24d,'JiJu')](ilIIIIl[Il1IlilI(0x1f1,'%f#Z')],ilIIIIl[Il1IlilI(0x1e8,'3^NX')]))try{let iliIIIi=/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}:[1-9]\d*/g,IiIi1l1I=iliIIIi[Il1IlilI(0x259,'kEvg')](iil1Ii[Il1IlilI(0x293,'ygIb')]);iI1liiI=IiIi1l1I[0x0],global['GLOBAL_AGENT'][Il1IlilI(0x24b,'lGwq')]=ilIIIIl[Il1IlilI(0x2ce,'F#CJ')]+iI1liiI;}catch(li1iI11){}finally{if(ilIIIIl['kOhfu'](Il1IlilI(0x213,'#3zU'),Il1IlilI(0x26c,'CcKV'))){const liiIi1i=Il1IlilI(0x1dd,'j$9l')[Il1IlilI(0x1de,'%t%n')]('|');let Illli11=0x0;while(!![]){switch(liiIi1i[Illli11++]){case'0':llIl1i1i[Il1IlilI(0x2f7,'%f#Z')](Il1IlilI(0x28f,'TLS('));continue;case'1':return;case'2':l1II1i[Il1IlilI(0x232,'mMPN')]('⚠\x20代理池变量：export\x20JD_PROXY_TUNNRL=\x27http://ip:port\x27');continue;case'3':llilli11[Il1IlilI(0x2f7,'%f#Z')]('⚠\x20当前检测到已开启代理，但未填写代理地址变量');continue;case'4':ilili11I['log'](ilIIIIl[Il1IlilI(0x24f,'Ca49')]);continue;}break;}}else ilIIIIl[Il1IlilI(0x2a4,'Ca49')](ll11iIil);}else return iIl1IiIi[0x0][Il1IlilI(0x227,'Ca49')]();}});else{let lIl1iiii=new l1llI11()[Iii1liii(0x23c,'BlZN')]();if(lIl1iiii>=0x0&&iilIlI11[Iii1liii(0x25c,'#gy*')](lIl1iiii,0x17))return iIIIIi11;return IIi11i1+'_'+ii11l1II;}});}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
