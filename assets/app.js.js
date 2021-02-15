const btn500 = document.getElementById('btn500')
const btn1k = document.getElementById('btn1k')
const btn2k = document.getElementById('btn2k')
const btn5k = document.getElementById('btn5k')
const btn10k = document.getElementById('btn10k')
const btn20k = document.getElementById('btn20k')
const btn50k = document.getElementById('btn50k')
const btn100k = document.getElementById('btn100k')



function totalQty(x){
    return x+=1
}

let keranjang=[]
function searchKeranjang(nama,qty,harga){
    for(let i=0;i<keranjang.length;i++){
        if(keranjang[i].nama.includes(nama)){
            keranjang[i].qty=qty
            keranjang[i].harga=harga
            return true
        }
    }   
}
function totalharga(qty,harga){
    return harga*qty
}
function struk(nama,harga,qty){
    
    let belanjaan ={
        nama:nama,
        harga:harga,
        qty:qty
    }
    const find = searchKeranjang(nama,qty,harga)
    if (!find){
        keranjang.push(belanjaan)
    }
    listKeranjang()
}
function listKeranjang(){
    let total =0
    document.getElementById("cetak").innerHTML="";
    console.log(keranjang)
    for(let i=0;i<keranjang.length;i++){
        total+=keranjang[i].harga
        let cetak = keranjang[i].nama+' '+keranjang[i].qty+' '+keranjang[i].harga+'<br>'; 
        let text = document.createElement("li")
        text.innerHTML=cetak;
        document.getElementById("cetak").appendChild(text)
    }
    document.getElementById('total').innerHTML=total
    return total
}
const inputDiskon = document.getElementById('inputDiskon')
inputDiskon.value=0

const btnDiskon = document.getElementById('btnDiskon')
btnDiskon.addEventListener('click',function(e){
    e.preventDefault
    struk('Diskon',-inputDiskon.value,1)
})
const btnClear = document.getElementById('btnClear')
btnClear.addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById("cetak").innerHTML="";
    document.getElementById('total').innerHTML=0
    keranjang=[]  
})

const totalCheckout = document.getElementById('totalCheckout')
totalCheckout.value = 0
function proses(val){
if(totalCheckout.value==0)
        totalCheckout.value=''
    totalCheckout.value+=val
}
btn500.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+500)
  })
  btn1k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+1000)
  })
  btn2k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+2000)
  })
  btn5k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+5000)
  })
  btn10k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+10000)
  })
  btn20k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+20000)
  })
  btn50k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+50000)
  })
  btn100k.addEventListener('click',function(e){
    e.preventDefault()
    proses('+'+100000)
  })

  const btnCheckout = document.getElementById('btnCheckout')
  btnCheckout.addEventListener('click',function(e){
      e.preventDefault
      listKeranjang()
      console.log(listKeranjang())
      let b = eval(totalCheckout.value) - listKeranjang()

      if(b==0){
          window.alert('Uang Pas')
      }
      else if(b>0){
          window.alert('Kembalian anda sebesar '+b)
      }
      else{
          window.alert('Uang anda kurang '+b)
      }
  })

//=================Ikan-ikanan===========================================
const qtyBandeng = document.getElementById('qtyBandeng')
const btnBandengPlus = document.getElementById('btnBandengPlus')
const btnBandengMin = document.getElementById('btnBandengMin')
const addBandeng = document.getElementById('addBandeng')
qtyBandeng.value=0
btnBandengPlus.addEventListener('click',function(e){
    e.preventDefault
    let qty = qtyBandeng.value
    qty++
    qtyBandeng.value=qty
    
})
btnBandengMin.addEventListener('click',function(e){
    e.preventDefault()
    let qty = qtyBandeng.value
    qty--
    if(qty>=0)
        qtyBandeng.value=qty
})
addBandeng.addEventListener('click',function(e){
    e.preventDefault()
    struk('Ikan Bandeng',totalharga(qtyBandeng.value,20000),qtyBandeng.value)
})
const qtyLele = document.getElementById('qtyLele')
const btnLelePlus = document.getElementById('btnLelePlus')
const btnLeleMin = document.getElementById('btnLeleMin')
const addLele = document.getElementById('addLele')
qtyLele.value=0
btnLelePlus.addEventListener('click',function(e){
    e.preventDefault
    let qty = qtyLele.value
    qty++
    qtyLele.value=qty
    
})
btnLeleMin.addEventListener('click',function(e){
    e.preventDefault()
    let qty = qtyLele.value
    qty--
    if(qty>=0)
        qtyLele.value=qty
})
addLele.addEventListener('click',function(e){
    e.preventDefault()
    struk('Ikan Lele',totalharga(qtyLele.value,2000),qtyLele.value)
})
const qtyMujaer = document.getElementById('qtyMujaer')
const btnMujaerPlus = document.getElementById('btnMujaerPlus')
const btnMujaerMin = document.getElementById('btnMujaerMin')
const addMujaer = document.getElementById('addMujaer')
qtyMujaer.value=0
btnMujaerPlus.addEventListener('click',function(e){
    e.preventDefault
    let qty = qtyMujaer.value
    qty++
    qtyMujaer.value=qty  
})
btnMujaerMin.addEventListener('click',function(e){
    e.preventDefault()
    let qty = qtyMujaer.value
    qty--
    if(qty>=0)
        qtyMujaer.value=qty
})
addMujaer.addEventListener('click',function(e){
    e.preventDefault()
    struk('Ikan Mujaer',totalharga(qtyMujaer.value,10000),qtyMujaer.value)
})
const qtyGurame = document.getElementById('qtyGurame')
const btnGuramePlus = document.getElementById('btnGuramePlus')
const btnGurameMin = document.getElementById('btnGurameMin')
const addGurame = document.getElementById('addGurame')
qtyGurame.value=0
btnGuramePlus.addEventListener('click',function(e){
    e.preventDefault
    let qty = qtyGurame.value
    qty++
    qtyGurame.value=qty  
})
btnGurameMin.addEventListener('click',function(e){
    e.preventDefault()
    let qty = qtyGurame.value
    qty--
    if(qty>=0)
        qtyGurame.value=qty
})
addGurame.addEventListener('click',function(e){
    e.preventDefault()
    struk('Ikan Gurame',totalharga(qtyBandeng.value,32000),qtyGurame.value)
})





