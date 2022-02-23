/* const tableautext=['Mon premier'
     /*  Mon Deuxieme;
      Mon Troisieme;
      Mon Quatrieme; */
/* ]; */
//r */ecuperations des 2 boites (G et D)
const left_id=document.getElementById('left_id');
const right_id=document.getElementById('right_id');
//recuperations des boutton
const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const tabP=document.querySelectorAll('p');
  
   //fonctions pour se deplacer

    function deplacerParagraphe(){
        for (let i = 0; i < tabP.length; i++) {
          tabP[i].addEventListener('click',function(){
            this.classList.toggle("selected");
          });
          // déplacer de G vers D
          btn1.addEventListener('click',function(){
            const selectedS=document.querySelector('.selected');
            right_id.appendChild(selectedS);
          });
          // déplacer de D vers G
          btn2.addEventListener('click',function(){
            const selectedS=document.querySelector('.selected');
            left_id.appendChild(selectedS);
          });

        }            
    }
 
deplacerParagraphe();
