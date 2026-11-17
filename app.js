const $ = (id) => document.getElementById(id);
let running = false, readCount = 0, codeCount = 0, testCount = 0;
const sample = `<!doctype html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello QUREO</h1>
  <p>This is my first test page.</p>
  <button onclick="alert('Hello!')">Click Me</button>
</body>
</html>`;
function log(message){const row=document.createElement('div');row.className='log-item';const t=document.createElement('span');t.className='log-time';t.textContent=new Date().toLocaleTimeString('ar-EG',{hour:'2-digit',minute:'2-digit'});const m=document.createElement('span');m.className='log-message';m.textContent=message;row.append(t,m);$('logs').prepend(row);}
function updateStats(){$('readCount').textContent=readCount;$('codeCount').textContent=codeCount;$('testCount').textContent=testCount;$('runState').textContent=running?'يعمل':'متوقف';}
$('startBtn').addEventListener('click',()=>{running=true;updateStats();log('تم تشغيل واجهة العرض التجريبي.');});
$('stopBtn').addEventListener('click',()=>{running=false;updateStats();log('تم إيقاف واجهة العرض التجريبي.');});
$('readBtn').addEventListener('click',()=>{ $('emptyTask').classList.add('hidden');$('taskContent').classList.remove('hidden');readCount++;updateStats();log('تم تحميل التمرين المحلي التجريبي.');});
$('sampleBtn').addEventListener('click',()=>{$('codeEditor').value=sample;codeCount++;updateStats();log('تم إدراج مثال HTML في المحرر.');});
$('clearBtn').addEventListener('click',()=>{$('codeEditor').value='';log('تم مسح المحرر.');});
$('copyBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('codeEditor').value);log('تم نسخ الكود.');}catch(e){$('codeEditor').select();document.execCommand('copy');log('تم طلب نسخ الكود.');}});
$('previewBtn').addEventListener('click',()=>{const code=$('codeEditor').value;if(!code.trim()){log('اكتب كوداً أولاً لعرض المعاينة.');return;}$('preview').srcdoc=code;log('تم تحديث المعاينة داخل إطار آمن.');});
$('clearLogBtn').addEventListener('click',()=>{$('logs').innerHTML='';log('تم مسح السجل.');});
$('codeEditor').addEventListener('input',()=>{});
updateStats();
log('الموقع جاهز. هذه نسخة واجهة تجريبية وليست متصلة بمنصة QUREO.');
