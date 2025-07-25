let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{ 
    button.addEventListener("click", (e)=>{
        if (e.target.innerHTML === "=") {
            string = eval(string);  
            document.querySelector("input").value = string; 
        }else if(e.target.innerHTML === "C") {
            string = ''
            document.querySelector("input").value = string;
        }else
            
            {
        console.log(e.target)
        string = string +e.target.innerHTML;
        document.querySelector("input").value = string; 
        }
    });
});


 // Simple floating dots creation
        function createDots() {
            const colors = ['#ffd900c6', '#000000'];
            const dotCount = 20;
            
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div'); 
                dot.className = 'dot'; 
                
                // Random properties
                const size = Math.random() * 10 + 5; 
                const posX = Math.random() * window.innerWidth;
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                dot.style.left = `${posX}px`;
                dot.style.bottom = `-${size}px`;  
                dot.style.animationDuration = `${duration}s`;  
                dot.style.animationDelay = `${delay}s`; 
                dot.style.color = color; 
                
                document.body.appendChild(dot); 
            }
        }

        // Initialize on load 
        window.addEventListener('load', createDots); 