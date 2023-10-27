// selecting elements for outputs
const output_year = document.querySelector('.output-yr');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');
const rotate_img = document.querySelector('#rotate-image')

// selecting elements for inputs
let isvalid = false
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');

// selecting elements for error-message
const error_day = document.querySelector('.error-day');
const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');

submit_btn.addEventListener("click", calculate)
input_day.addEventListener('input', e =>{
if(+input_day.value > 31){
    error_day.textContent = "Input a Valid Date";
    isvalid = false;
   return
}
    else{
        isvalid = true
        error_day.textContent = "";
    }
    if(+input_day.value === 0){
        error_day.textContent = "This Field is required";
        isvalid = false;
    return
    }
    else{
        error_day.textContent = "";
        
    }

});

input_month.addEventListener('input', (e) =>{
    if(+input_month.value > 12){
        error_month.textContent = "Input a Valid Month";
        isvalid = false;
       return
    }
        else{
            isvalid = true
            error_month.textContent = "";
        }
        if(+input_month.value === 0){
            error_month.textContent = "This Field is required";
            isvalid = false;
        return
        }
        else{
            error_month.textContent = "";
            
        }
    
    });

        input_year.addEventListener('input', (e) =>{
            if(+input_year.value > 2023){
                error_year.textContent = "Input a Valid Date";
                isvalid = false;
               return
            }
                else{
                    isvalid = true
                    error_year.textContent = "";
                }
                if(+input_year.value === 0){
                    error_year.textContent = "This Field is required";
                    isvalid = false;
                return
                }
                else{
                    error_year.textContent = "";
                    
                }
            
            });
            
            function calculate() {
                if (isvalid) {
                    let birthdate = `${input_month.value}/${input_day.value}/${input_year.value}`;
                    console.log(birthdate);
                    let birthdateobj = new Date(birthdate);
                    let ageDiffMill = Date.now() - birthdateobj.getTime(); // Fixed the date calculation issue
                    let ageDate = new Date(ageDiffMill);
                    let ageYears = ageDate.getUTCFullYear() - 1970;
                    let ageMonth = ageDate.getUTCMonth();
                    let ageDay = ageDate.getUTCDate() - 1;
                    output_day.textContent = ageDay;
                    output_month.textContent = ageMonth;
                    output_year.textContent = ageYears;
                }
                else{
                    alert("error")
                }
            }
            let rotationDegree = 0;

            rotate_img.addEventListener('click', function() {
              rotationDegree += 360; 
            
              rotate_img.style.transform = `rotate(${rotationDegree}deg)`;
            });

    