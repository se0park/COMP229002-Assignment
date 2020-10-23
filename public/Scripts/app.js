// IIFE -- Immediately Invoked Function Expression

// File name : app.js
// Stuent's Name : Seyeong Park
// Student ID : 301088175
// Date : October 23th 2020 


(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();