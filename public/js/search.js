// function sendData(e){
//     const searchResults=document.getElementById('searchResults')
    
//     fetch('search',{
//         method:'POST',
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify({payload:e.value})
//     }).then(res=>res.json()).then(data=>{
//         let payload=data.payload;
//         searchResults.innerHTML='';
//         if(payload.length<1){
//             searchResults.innerHTML='<p>Sorry. Nothing found.</p>'
//             return;
//         }
//         payload.forEach((item,index)=>{
//             if(index>0) searchResults.innerHTML+='<hr>';
//             searchResults.innerHTML+=`<p>${item.name}</p>`;

//         })
//         return;
//     });
// }