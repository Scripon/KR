/*
变量：
JD_PROXY_OPEN      // 代理启用变量，默认不开启（true/false）
JD_PROXY_TUNNRL      // 代理池代理地址变量，默认不开启，仅支持代理池模式(auto-proxy-pool)，格式为：http://ip:port
JD_PROXY_URL      // API代理地址变量，默认不开启，仅支持 数据格式:txt;提取数量:每次一个，格式为：http://api.xxx.xxx
JD_NO_PROXY      // 禁止走代理，默认 127.0.0.1,*.baidu.com 需要自行修改
JD_TOKEN_BLACKLIST  // 黑名单  PIN值
根据自行需要设定，脚本定时每25分钟自动执行一次

cron:5/25 * * * *
============Quantumultx===============
[task_local]
#代理缓存Token
0/25 * * * * jd_token.js, tag=代理缓存Token, enabled=true

*/

const $ = new Env('代理缓存Token');
var version_='jsjiami.com.v7';const iiil111l=ii1lIliI;(function(I1llIIi,lIIil1Il,lIi11Ii1,l1llII,ii1li1,Ii1li11I,il1i1ii){return I1llIIi=I1llIIi>>0x5,Ii1li11I='hs',il1i1ii='hs',function(lI1lIIIi,iIlilllI,li1i1ll1,iIiIIllI,lIiilIII){const lliI1ii=ii1lIliI;iIiIIllI='tfi',Ii1li11I=iIiIIllI+Ii1li11I,lIiilIII='up',il1i1ii+=lIiilIII,Ii1li11I=li1i1ll1(Ii1li11I),il1i1ii=li1i1ll1(il1i1ii),li1i1ll1=0x0;const Illi1I1i=lI1lIIIi();while(!![]&&--l1llII+iIlilllI){try{iIiIIllI=parseInt(lliI1ii(0x2c2,'UbPq'))/0x1*(-parseInt(lliI1ii(0x29d,'UBK8'))/0x2)+-parseInt(lliI1ii(0x1e5,'[sC]'))/0x3*(parseInt(lliI1ii(0x229,'Pvzw'))/0x4)+parseInt(lliI1ii(0x26b,'0bHp'))/0x5+parseInt(lliI1ii(0x207,'6sB9'))/0x6+-parseInt(lliI1ii(0x201,'lmo#'))/0x7*(parseInt(lliI1ii(0x1bb,'zo6R'))/0x8)+parseInt(lliI1ii(0x278,'YNx@'))/0x9*(-parseInt(lliI1ii(0x1b3,'YNx@'))/0xa)+parseInt(lliI1ii(0x28e,'$UOD'))/0xb;}catch(ll1lIII1){iIiIIllI=li1i1ll1;}finally{lIiilIII=Illi1I1i[Ii1li11I]();if(I1llIIi<=l1llII)li1i1ll1?ii1li1?iIiIIllI=lIiilIII:ii1li1=lIiilIII:li1i1ll1=lIiilIII;else{if(li1i1ll1==ii1li1['replace'](/[GYnHhFJQSDgqPEbpKLy=]/g,'')){if(iIiIIllI===iIlilllI){Illi1I1i['un'+Ii1li11I](lIiilIII);break;}Illi1I1i[il1i1ii](lIiilIII);}}}}}(lIi11Ii1,lIIil1Il,function(llIIIiil,Iiill1lI,l1lii1Ii,li1iI1li,iIlIlill,ili1lII,I11lIlii){return Iiill1lI='\x73\x70\x6c\x69\x74',llIIIiil=arguments[0x0],llIIIiil=llIIIiil[Iiill1lI](''),l1lii1Ii=`\x72\x65\x76\x65\x72\x73\x65`,llIIIiil=llIIIiil[l1lii1Ii]('\x76'),li1iI1li=`\x6a\x6f\x69\x6e`,(0x13f914,llIIIiil[li1iI1li](''));});}(0x1780,0x9f47e,iIlI1iii,0xbe),iIlI1iii)&&(version_=iIlI1iii);const il111I1=$['isNode']()?require(iiil111l(0x215,'zo6R')):'',I1I1IIil=$[iiil111l(0x28d,'UUzM')]()?require(iiil111l(0x2af,'AL7N')):'',lIIl1lll=require(iiil111l(0x2b9,'7N&]')),iIlIilll=require(iiil111l(0x2a7,'mh!5')),l11ili1I=require(iiil111l(0x242,'AL7N')),l1iI1II=require('./function/jdCommon'),ii1IiiI1=process[iiil111l(0x2a4,'6sB9')]['JD_CACHE_INTERVAL']||'25';let lIl11iil=parseInt(ii1IiiI1)*0x3c*0x3e8;const IiI1li1=new iIlIilll(lIl11iil,__dirname+iiil111l(0x251,'[cKE')),IIl1lIli=[iiil111l(0x22e,'f$bH'),'http://kr.kingran.cf/sign'],llilil1=IIl1lIli[IIiiliIi(0x0,IIl1lIli['length'])],il1I1llI=llilil1,Ill11il1=process['env'][iiil111l(0x232,'UbPq')]||'';let ilIilIll=iiil111l(0x220,'GKq!');function ii1lIliI(_0x180bc5,_0x9dad19){const _0x2b5198=iIlI1iii();return ii1lIliI=function(_0x561a02,_0x4452f3){_0x561a02=_0x561a02-0x1a8;let _0xbdf284=_0x2b5198[_0x561a02];if(ii1lIliI['gIGjAz']===undefined){var _0x294bb0=function(_0x4075ef){const _0x18fb22='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5f16d6='',_0x2f4839='';for(let _0x2b4b87=0x0,_0x5622d3,_0x29aecd,_0x535afd=0x0;_0x29aecd=_0x4075ef['charAt'](_0x535afd++);~_0x29aecd&&(_0x5622d3=_0x2b4b87%0x4?_0x5622d3*0x40+_0x29aecd:_0x29aecd,_0x2b4b87++%0x4)?_0x5f16d6+=String['fromCharCode'](0xff&_0x5622d3>>(-0x2*_0x2b4b87&0x6)):0x0){_0x29aecd=_0x18fb22['indexOf'](_0x29aecd);}for(let _0xdde6e3=0x0,_0x3b54e4=_0x5f16d6['length'];_0xdde6e3<_0x3b54e4;_0xdde6e3++){_0x2f4839+='%'+('00'+_0x5f16d6['charCodeAt'](_0xdde6e3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2f4839);};const _0x293446=function(_0x1fb7bc,_0x3a3d86){let _0x43db71=[],_0x317ecd=0x0,_0x296427,_0x52aec4='';_0x1fb7bc=_0x294bb0(_0x1fb7bc);let _0x2623d6;for(_0x2623d6=0x0;_0x2623d6<0x100;_0x2623d6++){_0x43db71[_0x2623d6]=_0x2623d6;}for(_0x2623d6=0x0;_0x2623d6<0x100;_0x2623d6++){_0x317ecd=(_0x317ecd+_0x43db71[_0x2623d6]+_0x3a3d86['charCodeAt'](_0x2623d6%_0x3a3d86['length']))%0x100,_0x296427=_0x43db71[_0x2623d6],_0x43db71[_0x2623d6]=_0x43db71[_0x317ecd],_0x43db71[_0x317ecd]=_0x296427;}_0x2623d6=0x0,_0x317ecd=0x0;for(let _0x1c35ba=0x0;_0x1c35ba<_0x1fb7bc['length'];_0x1c35ba++){_0x2623d6=(_0x2623d6+0x1)%0x100,_0x317ecd=(_0x317ecd+_0x43db71[_0x2623d6])%0x100,_0x296427=_0x43db71[_0x2623d6],_0x43db71[_0x2623d6]=_0x43db71[_0x317ecd],_0x43db71[_0x317ecd]=_0x296427,_0x52aec4+=String['fromCharCode'](_0x1fb7bc['charCodeAt'](_0x1c35ba)^_0x43db71[(_0x43db71[_0x2623d6]+_0x43db71[_0x317ecd])%0x100]);}return _0x52aec4;};ii1lIliI['svHhZm']=_0x293446,_0x180bc5=arguments,ii1lIliI['gIGjAz']=!![];}const _0xb9c87=_0x2b5198[0x0],_0x4d79fb=_0x561a02+_0xb9c87,_0x2189d8=_0x180bc5[_0x4d79fb];return!_0x2189d8?(ii1lIliI['uOnwJC']===undefined&&(ii1lIliI['uOnwJC']=!![]),_0xbdf284=ii1lIliI['svHhZm'](_0xbdf284,_0x4452f3),_0x180bc5[_0x4d79fb]=_0xbdf284):_0xbdf284=_0x2189d8,_0xbdf284;},ii1lIliI(_0x180bc5,_0x9dad19);}const li1II1II=process[iiil111l(0x1ff,'UbPq')][iiil111l(0x2ad,'!UAS')]===iiil111l(0x1c4,'zo6R'),IlllilI1=process[iiil111l(0x1e0,'iu4C')]['JD_PROXY_TUNNRL'],l1iI1lIi=process[iiil111l(0x1e4,'bzi6')][iiil111l(0x1fe,'E&H2')],lIllIll=process['env'][iiil111l(0x240,'6sB9')]||iiil111l(0x1ea,'YNx@');let Ilil1IIi='',li11IlI1=0x0;const il111i11=l1iI1II[iiil111l(0x22a,'lmo#')](Ill11il1);$[iiil111l(0x227,'UbPq')]=il111i11?.[iiil111l(0x210,'7ZM1')];let Iiil1I11=![];if(li1II1II){Iiil1I11=!![],require(iiil111l(0x21b,'%Xho'));if(l1iI1lIi){console[iiil111l(0x1ad,'o#T]')](iiil111l(0x268,'JqVn')),console['log'](iiil111l(0x1ba,'7ZM1')+l1iI1lIi+'\x0a');let i1llI1i=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;global[iiil111l(0x27a,'N^SD')][iiil111l(0x1cb,'UUzM')]=i1llI1i[iiil111l(0x2c6,'UUzM')](l1iI1lIi)[0x0]+','+($['hostname']||iiil111l(0x1c8,'zo6R'))+','+lIllIll;}else{if(IlllilI1)global[iiil111l(0x287,'bzi6')][iiil111l(0x1b9,'iu4C')]=IlllilI1,global[iiil111l(0x1d6,'7ZM1')]['NO_PROXY']=($['hostname']||'192.168.2.2')+','+lIllIll,console['log'](iiil111l(0x208,'gDoE')),console[iiil111l(0x253,'!UAS')](iiil111l(0x24f,'f$bH')+global['GLOBAL_AGENT'][iiil111l(0x1f6,'YNx@')]+'\x0a');else{const IiI1iiil=iiil111l(0x1f2,'UUzM')[iiil111l(0x22d,'JqVn')]('|');let I1I1Ilii=0x0;while(!![]){switch(IiI1iiil[I1I1Ilii++]){case'0':return;case'1':console[iiil111l(0x264,'UBK8')](iiil111l(0x266,'nI$i'));continue;case'2':console[iiil111l(0x23d,'uQ@E')](iiil111l(0x2b2,'%Xho'));continue;case'3':console[iiil111l(0x26a,'mh!5')](iiil111l(0x209,'XiLs'));continue;case'4':console['log'](iiil111l(0x261,'BdzC'));continue;}break;}}}}else{console['log'](iiil111l(0x1b1,'qwAI')),console[iiil111l(0x21e,'QVm!')]('⚠\x20开启代理变量：export\x20JD_PROXY_OPEN=\x27true\x27\x20\x0a');return;}console[iiil111l(0x1f7,'Rw*!')](iiil111l(0x2bb,'RpQB')+ii1IiiI1+'\x20分钟\x0a');let li1IIi1=[],i1iIiiII='';if($[iiil111l(0x249,'hdCE')]()){Object[iiil111l(0x1cc,'MQ]c')](il111I1)[iiil111l(0x1d4,'QVm!')](IIliiI1i=>{const li11iiiI=iiil111l;li1IIi1[li11iiiI(0x1bc,'zo6R')](il111I1[IIliiI1i]);});if(process['env'][iiil111l(0x206,'[cKE')]&&process[iiil111l(0x255,'QVm!')][iiil111l(0x238,'y4#a')]==='false')console[iiil111l(0x1f5,'UUzM')]=()=>{};}else li1IIi1=[$[iiil111l(0x29a,'bRqj')](iiil111l(0x260,'MQ]c')),$[iiil111l(0x1be,'1rwh')](iiil111l(0x2b0,'BdzC')),...jsonParse($['getdata'](iiil111l(0x265,'7ZM1'))||'[]')[iiil111l(0x1aa,'0bHp')](liillli=>liillli['cookie'])][iiil111l(0x1c0,'0bHp')](lI1l1llI=>!!lI1l1llI);allMessage='',message='';let IlliiIi1='';$[iiil111l(0x1ce,'UbPq')]=process[iiil111l(0x25e,'6Ixk')][iiil111l(0x2a0,'1rwh')]||IlliiIi1,I1i1iIll(),!(async()=>{const i1Il1iil=iiil111l,l1i1lllI={'gENks':'【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取','ZEyAV':i1Il1iil(0x284,'gDoE'),'JjjrN':function(ii1lIl1I,i11I11il){return ii1lIl1I<i11I11il;},'MICtV':function(l1ll1Ii,lllIII){return l1ll1Ii==lllIII;},'WIVub':function(l1I1ii1l,II11iIIi){return l1I1ii1l%II11iIIi;},'DNIbR':function(iI1lli11){return iI1lli11();},'KUkOV':function(l1lIIIl1,i1ll1il){return l1lIIIl1+i1ll1il;},'nvPdM':i1Il1iil(0x285,'E&H2'),'PTusB':function(II1I11Il,ilIilIl1){return II1I11Il(ilIilIl1);}};if(!li1IIi1[0x0]){$[i1Il1iil(0x2b3,'qwAI')]($[i1Il1iil(0x1ed,'QVm!')],l1i1lllI[i1Il1iil(0x29b,'6sB9')],l1i1lllI[i1Il1iil(0x2a6,'AL7N')],{'open-url':'https://bean.m.jd.com/'});return;}for(let lliIII1i=0x0;l1i1lllI['JjjrN'](lliIII1i,li1IIi1[i1Il1iil(0x239,'f$bH')]);lliIII1i++){i1iIiiII=li1IIi1[lliIII1i];if(i1iIiiII){const l1Iil1ii=i1Il1iil(0x1e3,'E&H2')['split']('|');let ill1l1lI=0x0;while(!![]){switch(l1Iil1ii[ill1l1lI++]){case'0':$[i1Il1iil(0x1c3,'BdzC')]=0x0;continue;case'1':$[i1Il1iil(0x271,'MQ]c')]=![];continue;case'2':await Iil11il1();continue;case'3':message='';continue;case'4':li1II1II&&(l1iI1lIi&&(l1i1lllI[i1Il1iil(0x228,'!UAS')](l1i1lllI[i1Il1iil(0x225,'tjEu')](li11IlI1,0x14),0x0)&&(await l1i1lllI[i1Il1iil(0x20a,'qwAI')](llI11il1),global[i1Il1iil(0x1d5,'lmo#')][i1Il1iil(0x231,'[cKE')]=l1i1lllI[i1Il1iil(0x203,'o#T]')](i1Il1iil(0x1d1,'C$gX'),Ilil1IIi)),console[i1Il1iil(0x26d,'JqVn')](l1i1lllI['KUkOV'](l1i1lllI[i1Il1iil(0x2a9,'N^SD')],Ilil1IIi)),li11IlI1++));continue;case'5':$['nickName']='';continue;case'6':$[i1Il1iil(0x1f8,'BdzC')]=l1i1lllI[i1Il1iil(0x1c9,'bzi6')](decodeURIComponent,i1iIiiII['match'](/pt_pin=([^; ]+)(?=;?)/)&&i1iIiiII[i1Il1iil(0x1b0,'Rw*!')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);continue;case'7':console['log']('\x0a\x0a******开始【京东账号'+$[i1Il1iil(0x25b,'RpQB')]+'】'+($['nickName']||$[i1Il1iil(0x23e,'Rw)S')])+'*********\x0a');continue;case'8':$[i1Il1iil(0x274,'YNx@')]=l1i1lllI[i1Il1iil(0x299,'UBK8')](lliIII1i,0x1);continue;}break;}}}})()[iiil111l(0x270,'N^SD')](IilIilI1=>$[iiil111l(0x1e6,'BdzC')](IilIilI1))[iiil111l(0x2c0,'nI$i')](()=>$[iiil111l(0x219,'[sC]')]());async function Iil11il1(){const i111iiiI=iiil111l,l11ii111={'UTUIe':function(iIlllil,i1IIlllI,IlIIiII){return iIlllil(i1IIlllI,IlIIiII);},'tgIzj':function(l1IIiIii,IlI1II){return l1IIiIii<IlI1II;},'MLtHh':function(i1Ii11ii,I1lIliii){return i1Ii11ii===I1lIliii;},'JgJsw':i111iiiI(0x2be,'nI$i'),'pdVOP':function(iiiIIliI,iili11II){return iiiIIliI==iili11II;},'dkwPh':function(iilii1I1){return iilii1I1();},'lButT':function(iIll1II1,i11iI1i){return iIll1II1+i11iI1i;},'yjtnh':function(l1illIi1,I1liIl1){return l1illIi1+I1liIl1;},'JiaLi':'📶\x20','IEvJk':function(lii11,Il1ilI1I){return lii11+Il1ilI1I;},'SbkcF':i111iiiI(0x224,'tjEu'),'pbvzJ':i111iiiI(0x24d,'bRqj')};try{let lillIlI='';$['flag']=![],$[i111iiiI(0x216,'bzi6')]=![],$[i111iiiI(0x241,'BdzC')]=![],$[i111iiiI(0x21c,'7ZM1')]=0x0,lillIlI=await l11ii111[i111iiiI(0x20b,'iu4C')](ilIil1i,i1iIiiII,ilIilIll);if(!lillIlI&&!$['nologin']&&li1II1II)for(let iIIii1il=0x0;l11ii111[i111iiiI(0x288,'mh!5')](iIIii1il,0xc);iIIii1il++){if(l1iI1lIi){if(l11ii111[i111iiiI(0x226,'hdCE')](i111iiiI(0x294,'AL7N'),l11ii111['JgJsw']))li11iIil[i111iiiI(0x27f,'Rw)S')](lI1ilI1I);else{if(iIIii1il==0x4||iIIii1il==0x8||l11ii111['pdVOP'](iIIii1il,0xc)||$[i111iiiI(0x257,'RpQB')]){console[i111iiiI(0x1f5,'UUzM')]('🤬\x20重试好像不能解决，那就换个新的IP吧！'),await l11ii111[i111iiiI(0x22f,'YNx@')](llI11il1),global['GLOBAL_AGENT'][i111iiiI(0x28f,'UUzM')]=l11ii111[i111iiiI(0x1dc,'UUzM')](i111iiiI(0x1fd,'hdCE'),Ilil1IIi),li11IlI1=0x0,$[i111iiiI(0x1e7,'!UAS')]++;if($['token403num']==0x3)break;}console[i111iiiI(0x29e,'57dS')](l11ii111[i111iiiI(0x1f3,'z9OY')](l11ii111[i111iiiI(0x283,'uQ@E')],Ilil1IIi)),console[i111iiiI(0x1f5,'UUzM')](i111iiiI(0x1df,'bzi6')+l11ii111['IEvJk'](iIIii1il,0x1)+'\x20次重试'),lillIlI=await l11ii111['UTUIe'](ilIil1i,i1iIiiII,ilIilIll),lillIlI&&(l11ii111[i111iiiI(0x1c2,'YNx@')](l11ii111[i111iiiI(0x27e,'zo6R')],l11ii111[i111iiiI(0x25c,'qwAI')])?$['flag']=!![]:I1iIIl11=i11Ii1I['body']),li11IlI1++;}}else{if(IlllilI1){console['log'](i111iiiI(0x212,'gDoE')+l11ii111[i111iiiI(0x277,'Rw*!')](iIIii1il,0x1)+i111iiiI(0x222,'JqVn')),lillIlI=await ilIil1i(i1iIiiII,ilIilIll);lillIlI&&(l11ii111[i111iiiI(0x237,'Rw*!')]===i111iiiI(0x256,'0bHp')?$[i111iiiI(0x279,'mh!5')]=!![]:(IiilllII=lllli1i1[i111iiiI(0x1f1,'eO[&')],l1llilI[i111iiiI(0x293,'zo6R')](i111iiiI(0x1a8,'XiLs')+IIlIilI1),i11Il11i[i111iiiI(0x254,'[cKE')](l1111llI,i1iIll1,llIIl1i)));$[i111iiiI(0x26e,'%Xho')]++;if(l11ii111[i111iiiI(0x22c,'Rw*!')]($['token403num'],0x2))break;}}if($[i111iiiI(0x291,'o#T]')])break;}}catch(ii1liII){console['log'](ii1liII);}}function iI1l11i1(iIi111I='',il1Iii1){const il1l1I1i=iiil111l;let IiiIl1i1=il1Iii1['exec'](iIi111I);if(IiiIl1i1&&IiiIl1i1[il1l1I1i(0x214,'zo6R')]>0x0)return IiiIl1i1[0x0]['trim']();return'';}function lllI1li1(lIi1IIiI,Il111II){const iiIiIl1I=iiil111l,i1iiiIlI={'RiGcP':function(I11ll1iI,l11ii1ii){return I11ll1iI>=l11ii1ii;},'aYqkH':iiIiIl1I(0x25a,'X6pz')};let i111il1l=new Date()['getHours']();if(i1iiiIlI[iiIiIl1I(0x1e9,'!UAS')](i111il1l,0x0)&&i111il1l<=0x17){if(i1iiiIlI['aYqkH']===i1iiiIlI[iiIiIl1I(0x1e8,'nI$i')])return lIi1IIiI;else iIIlliil['log'](iiIiIl1I(0x2bc,'gDoE'));}return lIi1IIiI+'_'+Il111II;}function IIiiliIi(lllil111,iI1ilI11){const ilill11=iiil111l,lI1IIIl={'EJMTa':function(I1I1i1lI,Il11liI){return I1I1i1lI+Il11liI;},'YFkZv':function(ilIllilI,iI1I1ii){return ilIllilI*iI1I1ii;},'NHSYR':function(lll1IIli,i11iIi11){return lll1IIli-i11iIi11;}};return lI1IIIl[ilill11(0x2a1,'XiLs')](Math[ilill11(0x275,'%Xho')](lI1IIIl[ilill11(0x1b5,'mh!5')](Math[ilill11(0x2b4,'[cKE')](),lI1IIIl[ilill11(0x262,'tjEu')](iI1ilI11,lllil111))),lllil111);}async function ilIil1i(IIlIlIii,ili11Ill){const ilIlI1ii=iiil111l,Ii1ll1ii={'dzqSv':function(illlIii1,iII1llli){return illlIii1+iII1llli;},'WYeIC':function(lIIl111i,iiI1i1Il){return lIIl111i*iiI1i1Il;},'rPBHI':function(ii1llIII,l1ill1II){return ii1llIII-l1ill1II;},'hQGkq':function(lI1lIlI1,liiill1l){return lI1lIlI1!==liiill1l;},'MdGnP':'HfBiy','fTzor':ilIlI1ii(0x1c6,'mh!5'),'RXIBb':function(I1llllil,Illl1Iii){return I1llllil==Illl1Iii;},'cdFTH':ilIlI1ii(0x1a9,'X6pz'),'gvapb':ilIlI1ii(0x2a5,'UbPq'),'xPNtd':function(iilI1ii,l1ili){return iilI1ii||l1ili;},'orNZk':ilIlI1ii(0x29c,'bRqj'),'UeLyL':ilIlI1ii(0x1ab,'7N&]'),'lrXVG':function(iI1Iill1,i1IIl1){return iI1Iill1(i1IIl1);},'MwkZU':ilIlI1ii(0x223,'lmo#'),'xmTbT':function(lil111l1,IIIIIiI,liil1I1i){return lil111l1(IIIIIiI,liil1I1i);},'zsnsa':'BoJqw','JcZGQ':'isvObfuscator','cWliX':'https://api.m.jd.com/client.action?functionId=isvObfuscator','rBRaS':ilIlI1ii(0x1dd,'57dS'),'EIrQn':ilIlI1ii(0x27d,'y4#a'),'JRalC':function(IIlllI1I,l1i1ii1I){return IIlllI1I===l1i1ii1I;},'ivLGu':ilIlI1ii(0x258,'JqVn'),'ukKvs':function(lIl11I11,i1iIiil1){return lIl11I11===i1iIiil1;},'ewSBq':function(II1lI1i,liI){return II1lI1i!==liI;},'kOlTW':ilIlI1ii(0x21f,'QVm!')};async function Iiillii(IIiIIiii){const Il1l1liI=ilIlI1ii;return Ii1ll1ii[Il1l1liI(0x292,'[cKE')](Ii1ll1ii[Il1l1liI(0x2a2,'X6pz')],Il1l1liI(0x2b8,'1rwh'))?Ii1ll1ii[Il1l1liI(0x1f9,'[sC]')](i1II11li[Il1l1liI(0x1fa,'zo6R')](Ii1ll1ii[Il1l1liI(0x1ee,'JqVn')](l1II[Il1l1liI(0x1ca,'Pvzw')](),Ii1ll1ii[Il1l1liI(0x200,'Rw*!')](Iil1ii1i,liIIill))),l11iIIII):new Promise(ll1llI1l=>setTimeout(ll1llI1l,IIiIIiii));}let IIliIIii=iI1l11i1(IIlIlIii,/(?<=pt_pin=)([^;]+)/);if(IIliIIii){let ii1lIl=Ii1ll1ii[ilIlI1ii(0x23a,'7ZM1')](lllI1li1,IIliIIii,ili11Ill);token='';if(token===''){if(Ii1ll1ii[ilIlI1ii(0x28b,'MQ]c')](Ii1ll1ii[ilIlI1ii(0x246,'tjEu')],ilIlI1ii(0x280,'UbPq'))){ilI1IlIi[ilIlI1ii(0x1db,'zo6R')](ll1ii1Il[ilIlI1ii(0x2a8,'UUzM')],Ii1ll1ii[ilIlI1ii(0x289,'o#T]')],ilIlI1ii(0x29f,'7N&]'),{'open-url':ilIlI1ii(0x202,'z9OY')});return;}else{let iII1iiil=await Ii1ll1ii['xmTbT'](l11ili1I,Ii1ll1ii['JcZGQ'],{'url':ili11Ill,'id':''});if(iII1iiil)try{Ill11il1?body=iII1iiil[ilIlI1ii(0x1bf,'UbPq')][ilIlI1ii(0x28c,'XiLs')]:body=iII1iiil[ilIlI1ii(0x1de,'gDoE')];const lli1lI1I=await lIIl1lll[ilIlI1ii(0x247,'RpQB')](Ii1ll1ii['cWliX'],{'headers':{'Host':ilIlI1ii(0x22b,'Rw)S'),'Content-Type':ilIlI1ii(0x298,'hdCE'),'Cookie':IIlIlIii,'User-Agent':Ii1ll1ii[ilIlI1ii(0x1c1,'iu4C')],'Accept-Language':ilIlI1ii(0x20f,'%Xho'),'Accept-Encoding':Ii1ll1ii[ilIlI1ii(0x2ac,'UUzM')]},'body':body,'timeout':0x7530})[ilIlI1ii(0x205,'C$gX')](async llliiI1i=>{const i1liiI1I=ilIlI1ii;if(llliiI1i[i1liiI1I(0x211,'Pvzw')])console['log']('🚫\x20getToken\x20API请求失败\x20➜\x20Response\x20code\x20'+(llliiI1i[i1liiI1I(0x1eb,'BdzC')][i1liiI1I(0x2b6,'XiLs')]||'')+'\x20('+(llliiI1i[i1liiI1I(0x1ae,'tjEu')][i1liiI1I(0x23c,'[sC]')]||'')+')'),Ii1ll1ii[i1liiI1I(0x213,'s16I')](llliiI1i[i1liiI1I(0x1e1,'%Xho')][i1liiI1I(0x243,'f$bH')],0x193)&&($['token403']=!![]);else{if(llliiI1i[i1liiI1I(0x27c,'0bHp')][i1liiI1I(0x2ae,'eO[&')])Ii1ll1ii[i1liiI1I(0x281,'Pvzw')](i1liiI1I(0x1e2,'1rwh'),Ii1ll1ii[i1liiI1I(0x20d,'AL7N')])?console[i1liiI1I(0x273,'gDoE')](i1liiI1I(0x230,'lmo#')+(llliiI1i[i1liiI1I(0x1d2,'gDoE')][i1liiI1I(0x20e,'UBK8')]||'')+'\x0a'):lliI111i=I1li1lii[i1liiI1I(0x245,'o#T]')][i1liiI1I(0x1fb,'X6pz')];else{if(Ii1ll1ii[i1liiI1I(0x1ef,'uQ@E')]!==i1liiI1I(0x26f,'z9OY'))console[i1liiI1I(0x27f,'Rw)S')](i1liiI1I(0x1d8,'RpQB')+Ii1ll1ii['xPNtd'](llliiI1i,'')+'\x0a');else{let Iiii1I1=ilI1iIli[i1liiI1I(0x1b4,'$UOD')](l11lI1i1);if(Iiii1I1&&Iiii1I1[i1liiI1I(0x1f4,'nI$i')]>0x0)return Iiii1I1[0x0][i1liiI1I(0x1af,'AL7N')]();return'';}}}});if(lli1lI1I&&typeof lli1lI1I===ilIlI1ii(0x1d0,'UbPq')){if(lli1lI1I[ilIlI1ii(0x269,'C$gX')]){let I11lilI1=JSON[ilIlI1ii(0x1da,'MQ]c')](lli1lI1I[ilIlI1ii(0x1b7,'Rw*!')]);if(Ii1ll1ii[ilIlI1ii(0x1c5,'7N&]')](I11lilI1[ilIlI1ii(0x1ec,'gDoE')],'0'))Ii1ll1ii[ilIlI1ii(0x21d,'bzi6')](Ii1ll1ii[ilIlI1ii(0x297,'C$gX')],Ii1ll1ii[ilIlI1ii(0x2aa,'o#T]')])?(i1l1iii[ilIlI1ii(0x235,'[sC]')](ilIlI1ii(0x296,'hdCE')),i1111iiI['nologin']=!![]):(token=I11lilI1[ilIlI1ii(0x1cd,'GKq!')],console[ilIlI1ii(0x2c3,'0bHp')](ilIlI1ii(0x24c,'nI$i')+token),IiI1li1['put'](ii1lIl,token,lIl11iil));else I11lilI1[ilIlI1ii(0x1c7,'eO[&')]==='3'&&Ii1ll1ii['ukKvs'](I11lilI1[ilIlI1ii(0x276,'!UAS')],0x108)?(console['log'](ilIlI1ii(0x2b5,'JqVn')),$[ilIlI1ii(0x216,'bzi6')]=!![]):console['log'](ilIlI1ii(0x252,'t^*o')+JSON[ilIlI1ii(0x28a,'t^*o')](I11lilI1));}else console['log'](ilIlI1ii(0x23f,'MQ]c'));}}catch(l111Iil){console[ilIlI1ii(0x2c5,'eO[&')](ilIlI1ii(0x259,'UUzM'));}else Ii1ll1ii[ilIlI1ii(0x23b,'GKq!')](Ii1ll1ii[ilIlI1ii(0x234,'[cKE')],'CAzJd')?ii1I1Ii=[Il11li[ilIlI1ii(0x2c1,'y4#a')](Ii1ll1ii[ilIlI1ii(0x1ac,'7ZM1')]),llIIIliI[ilIlI1ii(0x2a3,'$UOD')](Ii1ll1ii[ilIlI1ii(0x248,'gDoE')]),...Ii1ll1ii[ilIlI1ii(0x1d9,'E&H2')](lIll1Iil,Ili1llII[ilIlI1ii(0x2bf,'lmo#')](Ii1ll1ii[ilIlI1ii(0x2ab,'7ZM1')])||'[]')[ilIlI1ii(0x263,'BdzC')](Ii1ll1II=>Ii1ll1II[ilIlI1ii(0x26c,'QVm!')])][ilIlI1ii(0x1f0,'XiLs')](llIlllII=>!!llIlllII):console[ilIlI1ii(0x250,'bzi6')](ilIlI1ii(0x1fc,'f$bH'));}}else console['log']('📶\x20已读取本地缓存Token\x0a');}return token;}function llI11il1(){const lllll1I1=iiil111l,IIIliiil={'uqCeE':function(lIlII,l1Ii1l1i){return lIlII||l1Ii1l1i;},'Jwusa':function(Ii1lIIlI,I11iIlI){return Ii1lIIlI!==I11iIlI;},'RLhje':'TnfNW','vaIaS':lllll1I1(0x221,'C$gX'),'wZeGc':'PxEqm','txpoM':function(II11IIII,Il1llI1I){return II11IIII+Il1llI1I;},'NEGTs':lllll1I1(0x218,'XiLs'),'kynmz':function(ill1lIii){return ill1lIii();},'IXeGj':function(iilil1,II1ili){return iilil1!==II1ili;},'Hbtnb':'YyVjX'};return new Promise(async IiIiiiii=>{const lI1i1IIi=lllll1I1,Ill1i={'mtmej':function(iI1I1l,i1IlIii){return IIIliiil['uqCeE'](iI1I1l,i1IlIii);},'sCxAk':function(lI111I,I1iIii1I){return IIIliiil['Jwusa'](lI111I,I1iIii1I);},'luvYZ':IIIliiil['RLhje'],'dcJuv':function(I1l1Ili1,IIiIIIl){return I1l1Ili1===IIiIIIl;},'MWRNA':IIIliiil[lI1i1IIi(0x25d,'UbPq')],'UsFet':IIIliiil['wZeGc'],'rkrQo':function(IiI11i1,i1iIliiI){const i1IillI1=lI1i1IIi;return IIIliiil[i1IillI1(0x204,'s16I')](IiI11i1,i1iIliiI);},'rJlFO':IIIliiil[lI1i1IIi(0x1bd,'UBK8')],'lxnXJ':function(Ii11l1ii){const I1l1liI1=lI1i1IIi;return IIIliiil[I1l1liI1(0x1b8,'6sB9')](Ii11l1ii);}};IIIliiil[lI1i1IIi(0x1cf,'bRqj')](IIIliiil[lI1i1IIi(0x1d7,'gDoE')],lI1i1IIi(0x1b6,'t^*o'))?ill1Iil['log'](lI1i1IIi(0x1d8,'RpQB')+Ill1i[lI1i1IIi(0x236,'f$bH')](li1I1i1i,'')+'\x0a'):$['get']({'url':l1iI1lIi,'timeout':{'request':0x1388}},(iI111ili,ll11illI)=>{const IiIliili=lI1i1IIi;if(ll11illI){if(Ill1i['sCxAk']('cAvlz',Ill1i['luvYZ']))try{if(Ill1i[IiIliili(0x217,'7ZM1')](Ill1i[IiIliili(0x290,'zo6R')],Ill1i[IiIliili(0x1b2,'o#T]')]))Iil11ll1['flag']=!![];else{let lIiIll1l=/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}:[1-9]\d*/g,i11liii=lIiIll1l[IiIliili(0x233,'7N&]')](ll11illI[IiIliili(0x24b,'N^SD')]);Ilil1IIi=i11liii[0x0],global['GLOBAL_AGENT'][IiIliili(0x2b1,'1rwh')]=Ill1i[IiIliili(0x24e,'GKq!')](Ill1i['rJlFO'],Ilil1IIi);}}catch(IiliI1iI){}finally{Ill1i[IiIliili(0x282,'57dS')](IiIiiiii);}else iiIl111l[IiIliili(0x295,'gDoE')](ii1IiI1l[llilIIil]);}});});}function iIlI1iii(){const iiIill11=(function(){return[...[version_,'njPsKjDibGayQEmDHYi.YpSchoFm.vgH7FhYEJqL==','WP5LrmomD2RcGa0r','WPtdPCkVs8kL','WPnRt8okF3i','WOy1oCoqtNaY','aSkZWRzLBhJcL8ow','W5H0E8kvrM0UW6JdKSkjtmkQbW','p8kRyaOHk1G','WRpcLZejW43dRSkqDK3dVSktxG','et8RWQJcSdFdGtr/W4NdKCk/','omk0WRf7yq','8loOUYBcPMldLSkxW6blacLRymkxW6JORPVMS5JLPiZOTipcJa','ACk1WR/dVmob','W6xdT8kAycq','oCokWQ0','WRK0W7GcWP0','EwX0hguGySkGnSkCvbVdU8oTbmooWO4Fp8ohWPtdR3CoWOPfW4fqk0yIW7tcGIZcVmkvW5hcVSkSWPzsmSorv2VcRIG','eSk5WQfS','8kMPVCojWOpcO8k2WPpcHoAWREADREAiRowkTEInL+woTE++U+EULSkH','WRPcW6m','WPbtpCoDFuGOBG','c8k2WRymW6C','m8k7W5/dLSk1petcGmk5WO7dQWmba8oAWOf3','pJ7cNW','W5yae0zrALpdR10EW4pdSIK','WOzwW5HshSoD','WQ/dNCk/W5/cLfNcSH1PWOFdPq','W6ldU8k4WPqZ','WONdM8ktW5NcQG','FG1ekCoSW4SgW5zmnwBdISkTgmkgreRdKbxdNte','WPHCW4XNa8obemoH','e8k5WQfW','n8kLFYO','fJ7dV8ktza','W5/cMSoIW78D','WRHVWORdImoxya','WRmVfSoyW48','W6ykWRWkW7VcRLPxW4u','WP0tW69XWQW','W6/dH8kNWPGpWQe','WRKzW6O','b2SNv8kdWRvKWRCLqa','W4XwoG','WR9kW5PLiSoodSoH','WOfivIWs','mSovWQxdUqq','WO8yeu19jItdTLFcUG','8koOJeLiomkJW6LYWQRcLCkkddSFWOxORztMS67PLAlOROGQ4P+FuEESSEwsUoIoR+wpU+wNHUI0JG','WQTiWOBdVmkUrq8','t8kdWRJdUSoudYZcPCoxWQFcJdm','WPLNuW','W5jPh8omW5u','W4ldRKH+WR7cKmo8FwBdRSkAy1i','WOWnW69VWRFdRSkCW5JcMrXVguxdS30hWQfJqKhdHuS','xSkQySkNW6G','WQlcQGXnrW','WO0GoCodha','WOe/W5/dPudcGGmd','fmoXWRZdMfNcPSkWW7VcRSksl3HM','4PMH77UzW6xKU7BNKixMSBBKUiFNKRxLT4VLVAJLKBNVV5i','4PM+77IjW4BLV6/LI7/MO5lMT5JLIANLT4pLVydLKR/KUilNK4pVVldKVPFMN6VLOkVLHl7KUytNKk7LNzNLNP3LJPpPHye','d8owW5vula','WOP4W4biWOi','5BY55yIM5BAN6k6j57+q6BU15zcG5y+x772l','nmk8tcVcLa','W7WFyNS','WPHEy8oLC0GOjMVcSW4yW4ec','pHWxWP7cNXRdSXa','kZpdLuhdG8kBmfm','8koBU8oLqwX9WOhdNEAYMoADOEAjHUwjL+InQ+wnP++9PoEUUhq','WOtcIJvGAa','omoCWQtdSqlcQq','ESkwWQddSJxcRSkQlSkVeeTUWQ8','nt/cHCk4WQVcTmky','mHaUWP/cHW','WRzYWPldJmkipCk8','WOfDsrO','WRrEWQ7dKCoH','WOvAiCopC0P2AK/cMfSDW5nrvSkLkCklW5CHl8ok','iHWpWO/cN0/cRKzwW7NdSG','mWhcRSk8WR0','nCkRDq','gSkfAauK','W5XcW6pcSSolW5WlpuRdPwpcLmovW6DnCL3dVCooWQBcOmocaSoIW4jClCoHWPLhW4q','WQS7jSoznW','yEATHUMfL+ISJW','WRFcTbeGW6xdH8k8Fu4','dJX/WQFcGW','mGD6WPNcLG','WO5WWOBdHmo8','WPrMvSoBCMFcHbS','WPBdU8kxW47cRa','BqddLwpdICkKja','WOtcUGW4W6NdT8k9wW','WQBcMvxdNCoIWOfhpCohqItcHq','W5bDc8olW4W'],...(function(){return[...['mHFdTSkZuW','g8othv9NW7JcKNZcSCkzW4PcfspcRConW58pchGMxYZdLJDEWP5mW5W','k1qev8k0','8ykzSf4SW6NdLSkBwghdNSkZkKPgWOZORPNMSPRLP6BOT7Kz','WOmVW5tdSvRcKaqlW75x','WRznESo8vuhcPYeUn8kHWO4d','W4qrkSoF','WQa0W6ZdTvi','WOLDqa','hSotbeO3','W5bBk8o+W5y','wmotDGxdUSkgfd8','h8ocb0GPWR8','lH4WWOJcPq','W5fbW4tcGmoj','WPzgrGSrlIFdNxO6W5pdHbG','W5tcG8oK','WPlcMLNcGCobW45apa','8lQiVCoiDcqHWR/cL8k/W4KApCoqWQhdTEIUU+AYTUwMUEI0J2JINBdcUUAnQ+woUoI/LowzNEs7VEEQTq','ASkeW5hcOsBdJSoqW6FcQ8kUgq','WP5wW5rYaSkBu8k3','ECo3BaRcSJVcPSkRWOeNW7VdIazBWPzdzZnpda','amotcfSOWQtdVNlcPCkv','WQ0Vfmot','CCkEFCkj','hZ1cWP/cLq','W4pdV3xcTq','jCkZWOLStW','WQPpWRZdO8oWdW','j8ojp8oyWOVcJZTguCkVWQJdKbO','W5FcTZhdGa','8l+QRmoP5P+t5z2l57+A5AYTW4RdOXald+AkGowjNwlcIG','WORdVmktBSkK','W4zDW6xcK8ox','4PMI77QOsEs7JoErM+wFP+wFVEs4P++/MW','nZ/cJG','W6qDW7xdJ2BcTd8RW4GHW7RdMgRcUexdJZJdVCk1W4pcH8kOW6jPWPqT','8kI4MSoqxCkSWR7dT8o9W6ldG0NdKstcPCk95OYy5y++6l6f5zUC5B2j5BUoWPFIN5NdTW','WRFdNCkZ','WRSoW7q','pmkQza','jtXuaGq','W4FdV23cPgNcLSoZWRW','cZddJmkQzG','8yQlNCkTeCkSWQy6rmkEW4ZcUb3dPZJdOEwEUEwLIUEqG+ISOEAYNUAvJEMbSowlNUs4VoMuRUITHW','WPuVjxna','W5RdVMlcPh8','gmo6W7Dvoa','WOPOBmootW','dWuJ','WOXlW5b6','W5BdUCkhEcGWWQhcVa','4PMkgCo+rYxLNP/LNkpLJzZPHilVVPTgW6JdRqyKW5jlWRBcUCk3nXyUmCopCmoBsJpdTCkPWQrPWQSyWQ/dGay5WQmzg8o7WPL1qmkoySkqB8oA','kWz/WRxcPG','WODyW48','W7iFyq','frWlWOhcMb7dRt98','4PIJWOlORl7NNjRMMkJKUkRNKBpLNQ7LN4ZKUR7MLyhMJAdKUBpNK4tMSlJMQQhLVjfauCkns38/W4/dTZTImSotWQ/cT8k1vmoDWPq','WQCEW67dHNhcQa','4PMq77MOWRRcM3CM5zY05z6N5lUq55oY5BsG5B+P5zcQ77Y/','WOWUkCoz','jIJcVG','qeS7ufP2W7eDW7pdPNTFqa','oSkRFsqPlq','lqJdVq','WPzzjCoiFbjRoeBcIfG','WQmTW592WQ8','W5BcUshdMKO','W73dUCkCvs00WOW','WO4BhLHZodNdKfe','hmk5WQi','jLexySkK','WOrAiCocya','WR7dGmkMW5NcLqNdPW','W6L8k8ooW7C','DNWHuSk9WRrX','lcVcUmoK','W7lcLbRdU2mzWOVdU8khWPzWW5W','zmoQpKBdQw/dQ8kvWROEWQxdSIa','abH+eaaRWRC3','DCoTqdhcK8oKjr0gW5JcQSo4W4NcIZLTbq','b8oBWQhdTta','WQVcHLS','WR5MB8oEAW','mqFdOvRdNq','x1aUlx8','W7lcHCoIW4mw','gmkIWRfLCcZdI8kCwW03WQBdSSoCrSo+mbtcM1ZdOMq','8j6aSCoh','rHbVdGStWQC','hbZcPSkvWO3cKCkPWQVdIYfYFG','pIdcKmo5BG','C8kRC8khW4W','lCofWOjtWQFcRCokW7tdSa','W73dH8kVEda','WR1PWOJdISoxymoNdemS','WRWfW4mzWQ3cTW'],...(function(){return['WOmFvmoTWQNcKMldR8kaWQqcuNDO','WP0IW5KMWPBcGJXKWQ3dSa','gCoUWPJdMdC','C8ktAmkp','WQmQW4FdINq','omowWQ0','oSkYrttcNW','amkJWRz9','8y+QL8osW6VdSr50WQK5imoeWRaBWQeq6k+25Rcr5Asi6lwxkEkCLdlOTi7LJ6lMLz3MLzK','WOC3aCoNaq','WQjmWOldOmo9cuhcSJSQW4tcVYldNc52jbquzSo6FWvGW499oupdTSk7vSoojW','W5uLBu0c','WRRdMmk+AmkUd8o4','r8kfW4dcHbO','WP7dKSkLz8kMhSotbq','WQODzgWWEay','x0CN','W4KDo8omDuVcJcD8vJzjW6uaosddQSk9b8oMyCoA','bSk8WO08W4ldGCoTW4bvWRhcVr/cP8o/WQSJWOJcTW','WPTmWQVdQmot','WQetofvi','W5zdemk4W7JdLZi','rCkUW7G','WQHpuSoTEa','dCkDCZ7cIG','zgJcV8o2AMWQD8oQW6m0bmozWPNcKSoFW5NcLaKFb3W','WRSxW6at','W5VcRGxdNw8','FmkjrCkVW4S','gWqpWRdcPa','WPa/W78NWQC','WPhdTSklW6RcQcldMNDyWR3dMcyk','WQuVgCoe','ECo3ErRcSJZcNmkTWPOGWRldMG','WQLwW5b8bCokkCoaW78','bmkSWOy4W5ldMSo6W4fsWQO','4PMcfUs6REEsQ+AXSUwpVUMgLo+8Ku3cHuugWO5hgCkagCkNW7mbaCoIu0FcJCkOD8o1WRRcM8o7cItcUmomW4KSW6ZdN0ZcQHDwW550WQlcGG','jSoRW7S','WRKAW67dHwRcRq','8k+lJmk6WR1cg1dcIfJcKCk8W4LeDsRORAlMSlxLPQtOT7fb4P2hBoI1UUwmI+AxPEAvMG','WQ1YWOFdImohyCoqnLuL','n8o+W5FcM8k2CuxdJ8oIWP7cNdbrjW','bmkEWPabW7q','W4ygoW','oHWd','4PQI77QFjSkvAmojWQBdOEE8S+wSVEAwSEMwVWe','8kozVCoLCMzIWRddNfinomoOWP3dOshORApMSjBPLkpORjCt4PYtA+ESIowtJ+IoV+wnT+wLIEI3La','jSkMg3BcJ8oZCtyQW5dcPmo2W6y','W7xdSSkqWOS3','WPpcVGOVW63dLSkU','W6xdI8kNWP4xWQum','DCoYxsxdNSkWia','W4K+fmkDktxcGbWmf8khWPq','hHjQ','yCkoW7VcPepdSSkSj8kVbWjo','WQSVgG','WRaoW6Gv','8yI4Imog5P6q5z6c57Yb5A+ldv4RW7xcJ+AlLEwkO8oRW4S','WPWehwL/','hXX9','W6igimoxBXtdQuWS','oqeQWRdcMG','ECkqBG','fYTFWPZcM8oTACoe','i8kQyXi','W41ykCoNW7q','4PURWRJMOzZMTB3LVk3LI5dMQRZLVAZMNP3LVPBLK5tKUOJNKy7VVidLJk3LS5BPGO/LH6W','qmkmt8knW4O','EW5bnmoVW5vbWRWVwWFcHq','W5rEaCk/','eWhcSSozCG','b8oiWQzqWPe','W4jwoCo9','s8k5W6dcGHm','WPD4W4frWRJdOmoJpdfz','4PMh77M8ros4IEEtT+wDI+wFNUs5J++8OG','BmowWO3dMtJcJSk1','jmomWRNdVG','W5a1qvyN','k8kDWQymW6ZdVSoj','WPHOuCoo','fbrHfaO3','WQ1UW4DGWRq','aNmht8k0','WOHCW555','imolWR/dSW','W6S7lSoqrq','44gA5O6x56EJ44ks6k+Z5ywh6i+P5y+iW6BdONqmW5hcN8oW55Mo5O2t5l6c55wpnq1MWQZdGmkF55MU5lMa5lM7562B5yQs6iYe5y+O','WQqVgCoy','zCkaW7JcUeFdT8o9A8o0w1C','cWtcNmkKWO4','kZFdIfxdG8ky','WPS5W5iMWPVcNtzY','W77dS8krya','W4bzW7ZcP8ow'];}())];}())];}());iIlI1iii=function(){return iiIill11;};return iIlI1iii();};function I1i1iIll(){const IillI=iiil111l,lIIIIliI={'SmVTV':function(II1Ii111,lIl1ilIl){return II1Ii111+lIl1ilIl;},'jXHmS':function(iIIlI1l1,liiliiIl){return iIIlI1l1<liiliiIl;},'SVYMa':function(lil1il,Ilililli){return lil1il(Ilililli);},'MEaKE':function(I1ilii1I,lIlIii1l){return I1ilii1I==lIlIii1l;}};if($['blacklist']=='')return;console['log'](IillI(0x20c,'6Ixk'));const I1iiiiiI=Array[IillI(0x25f,'BdzC')](new Set($[IillI(0x272,'X6pz')]['split']('&')));console[IillI(0x2ba,'7ZM1')](lIIIIliI['SmVTV'](I1iiiiiI[IillI(0x244,'eO[&')]('&'),'\x0a'));let I1liiI1l=I1iiiiiI,i1iIiiI=[],iiiliIl=![];for(let IIIiIIli=0x0;lIIIIliI[IillI(0x21a,'XiLs')](IIIiIIli,li1IIi1[IillI(0x267,'[cKE')]);IIIiIIli++){let l1IIlIlI=lIIIIliI['SVYMa'](decodeURIComponent,li1IIi1[IIIiIIli]['match'](/pt_pin=([^; ]+)(?=;?)/)&&li1IIi1[IIIiIIli]['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]||'');if(!l1IIlIlI)break;let iIIl1=![];for(let I1I1iIiI of I1liiI1l){if(I1I1iIiI&&lIIIIliI['MEaKE'](I1I1iIiI,l1IIlIlI)){iIIl1=!![];break;}}!iIIl1&&(iiiliIl=!![],i1iIiiI['splice'](IIIiIIli,-0x1,li1IIi1[IIIiIIli]));}if(iiiliIl)li1IIi1=i1iIiiI;}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
