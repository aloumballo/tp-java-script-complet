/* <!-- <DIV id="block">
<div class="icon">
    <i class="fa fa-edit" style="font-size:34px"></i>
    </div>
    <div class="icon2" id="item2"> <img src="trash.svg" alt="">
    </div>

</div>
<textarea name="" id="" cols="30" rows="10"></textarea>
</DIV>
--> */
//fonction pour afficher
function affiche() {
    const btn=document.getElementById('button');
    btn.addEventListener('click',()=>{
    const conteneur=document.querySelector('.content');
    const block=document.createElement('div');
    const icon=document.createElement('div');
    const icon1=document.createElement('i');
    const icon2=document.createElement('i');
    // const im1=document.createElement('img');
    // const im2=document.createElement('img');
    const txta=document.createElement('textarea');
    const content=document.createElement('div');

    //organisation des elements
    conteneur.appendChild(block);
    block.appendChild(icon);
    block.appendChild(txta);
    icon.appendChild(icon1);
    icon.appendChild(icon2);
    // icon1.appendChild(im1);
    // icon2.appendChild(im2);
 
    //creation class
    block.setAttribute('class','block');
    txta.setAttribute('class','txta'); 
    icon.setAttribute('class','icon');
    icon1.setAttribute('class','fa fa-edit taille');
    icon2.setAttribute('class','fa fa-trash-o taille');
     

    /* txta.seyAttribute('class','txta'); */
    /*  txta.setAttribute('class','')  */

    icon2.addEventListener('click',function(){
         conteneur.removeChild(block);
    })
    icon1.addEventListener('click',function(){
        txta.toggleAttribute('disable');
        txta.focus();
    })    
   })
}
affiche();