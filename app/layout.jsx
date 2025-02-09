import { Inter } from 'next/font/google'
import '../styles/custom.css'
import '../styles/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBarWithSuspense from './components/ProgressBarWithSuspense'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeMoeUs Waifu',
  description: 'Waifu Collections',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="7RdovPtxWZZpAgVmKtByo40jjFoFJEi2C3k0SdNpD7s" />
      <body className={inter.className}>
        {/* <ProgressBarWithSuspense /> */}
        {children}
        <div id='fixedban' style='width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:0;z-index:999;-webkit-transform:translateZ(0);'>
<div style='text-align:center;display:block;max-width:52px;height:auto;overflow:hidden;margin:auto'>
<a id='close-fixedban' onclick='document.getElementById(&quot;fixedban&quot;).style.display = &quot;none&quot;;' style='cursor:pointer;'><img alt='close' src='https://1.bp.blogspot.com/-_A83iDM6JYc/VhtxROLILrI/AAAAAAAADK4/aM4ikIA6aqI/s1600/btn_close.gif' style='vertical-align:middle;' title='close button'/></a>
</div>
<div style='text-align:center;display:block;max-width:300px;height:auto;overflow:hidden;margin:auto'>
<script type="text/javascript">
	atOptions = {
		'key' : '28d616e95ce1677a8725f96915121cad',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/28d616e95ce1677a8725f96915121cad/invoke.js"></script>

</div>
</div>
 
 <!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4831986,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4831986&101" alt="" border="0"></a></noscript>
<!-- Histats.com  END  -->
      </body>
    </html>
  )
}
