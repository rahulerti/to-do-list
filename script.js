const input=document.querySelector(".task");
        const btn=document.querySelector(".button");
        const list=document.querySelector(".t_l");
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            if (input.value.trim()===""){
                alert("please enter a task");
            }
           else{
            const l=document.createElement("li");
          const checkbox=document.createElement("input");
          checkbox.type="checkbox";
          
          const tate=document.createElement("span");
          tate.textContent=input.value.trim();

          const del=document.createElement("button");
          del.textContent="x";

          del.addEventListener("click", (c)=>{
          list.removeChild(l);
          });
            list.appendChild(l);
           
            l.appendChild(checkbox);
            l.appendChild(tate);
            l.appendChild(del);
            input.value="";
           }
            
        });