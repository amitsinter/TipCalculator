
/* getting the bill amount from the user + the number of people */

let bill=""
let num_of_peopl=""

function updatBill(e)
{
    const val=e.target.value
    bill=val
}

function updatePeopleNumber(e)
{
    const val=e.target.value
    num_of_people=val
}



let calc = document.getElementById("calc");

/* cheking if the user insert bill amount and number of people */
function checking(bill_check,num_peple)
{
    
    if(bill_check==="")
    {
        window.alert("You need to inser bill amount")
        return false
    }

    if(num_peple==="")
    {
        window.alert("You need to insert the number of pepole that share the bill")
        return false
    }
   return true
}





calc.addEventListener("click",calculateTip)





function calculateTip()
{
    let tip=0
    let each_person_amount=0
    let total_amount=0
    let check_input=true
    let bill_check=bill
    let num_peple=num_of_people
    let index=document.getElementById("service").selectedIndex

    check_input=checking(bill_check,num_peple)


      /* checking which index was selected from the options*/
    switch(index)
    {
        case 0:
            window.alert("You must choose an option")
            check_input=false
            break
        case 1:
            tip=bill*0.2
            total_amount=tip + parseInt(bill)
            each_person_amount =parseInt(total_amount) /parseInt(num_of_people)
            break
        case 2:
            tip=bill*0.1
            total_amount=tip + parseInt(bill);
            each_person_amount =parseInt(total_amount) /parseInt(num_of_people)
            break
        case 3:
            tip=bill*0.02
            total_amount=tip + parseInt(bill)
            each_person_amount =parseInt(total_amount) /parseInt(num_of_people)
            break
    }
    
    if(check_input)
    {
        document.getElementById("fintip").innerHTML="Toatl Tip: "+tip.toFixed(2)
        document.getElementById("totalamountfinal").innerHTML="Total Amount: "+ total_amount 
        document.getElementById("personout").innerHTML="Each Person Owes: "+each_person_amount.toFixed(2)
    }
    

}

