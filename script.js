const modal = document.getElementById('myModal');
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        
        var img = document.querySelectorAll('.thumbnail');
            
        for (var i=0; i<img.length; i++){
            
            img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        }
             
        }

        modal.onclick = function() {
            img01.className += " out";
            setTimeout(function() {
               modal.style.display = "none";
               img01.className = "modal-content";
             }, 400);
            
         }