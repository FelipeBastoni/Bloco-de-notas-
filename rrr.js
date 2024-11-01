

        let tabCount = 1;

        document.getElementById('addTabBtn').addEventListener('click', function() {


            const newTab = document.createElement('div');
                newTab.id = `aba${tabCount}`;
                newTab.classList.add('tab');

            document.getElementById('tabsContainer').appendChild(newTab);

	



            const tt = document.createElement('p');
                newTab.appendChild(tt)
                tt.innerText = `Nota ${tabCount}`;
                tt.style.margin = "0";





 	   const but = document.createElement('button');
		but.onclick= function(){  newTab.remove();  };
		but.innerText = "Deletar";
		but.style.marginTop = "1.5%";
		but.style.marginBottom = "1%";
		document.body.appendChild(but);
		newTab.appendChild(but);





	   const por = document.createElement('button');
		por.onclick= function(){  document.getElementById('imp').appendChild(newTab); newTab.style.backgroundColor = "red"; };
		por.innerText = "Definir como importante";
		por.style.marginTop = "1.5%";
		por.style.marginBottom = "1%";
		por.style.marginLeft = "1%";
		document.body.appendChild(por);
		newTab.appendChild(por);




            
	    const des = document.createElement('button');
		des.onclick= function(){  document.getElementById('tabsContainer').appendChild(newTab); newTab.style.backgroundColor = ""; };
		des.innerText = "Desfixar de importante";
		des.style.marginTop = "1.5%";
		des.style.marginBottom = "1%";
		des.style.marginLeft = "1%";
		document.body.appendChild(des);
		newTab.appendChild(des);





            const input = document.createElement('textarea');  
                input.style.resize = "none"; 
                input.style.overflowY = "hidden";
		
                    input.addEventListener('input', function(){

                        this.style.height = 'auto';
                        this.style.height = `${this.scrollHeight}px`;

                    });

            newTab.appendChild(input);





            tabCount++;


        });




