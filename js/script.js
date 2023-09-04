// window.onload=function(){
//     // var hideSection=document.getElementById("pokat");
//     // hideSection.style.display='none';
//     // var showpokat=document.getElementById("showpokat");
//     // var cal=document.getElementById("cal");
//     // showpokat.addEventListener("click", function() {
//     //     hideSection.style.display='block';
//     // });


//     showpokat.addEventListener('change', function handleChange(event) {
//         console.log(event.target.value); //get selected VALUE
//       cal.innerHTML=event.target.value;
//       });

//     }

    function basicSalary(basicSalary,noOfMonth){
        basicSalary = basicSalary*noOfMonth;
        console.log(basicSalary);
        document.getElementById("bs").innerText = basicSalary;
        return basicSalary;

    }

    function houseRent(basicSalaryInput,houseRentInput,noOfMonth){
        basicSalaryTotal = (basicSalaryInput*noOfMonth)/2;
       houseRentTotal = houseRentInput*noOfMonth;
       document.getElementById("hr").innerText = basicSalaryInput;
        
        if(houseRentTotal>=basicSalaryTotal){
            maxExemBasicSalry = houseRentTotal - basicSalaryTotal;
            document.getElementById("houseNet").innerText = maxExemBasicSalry;
            return maxExemBasicSalry;

        }else{
            document.getElementById("houseNet").innerText = basicSalaryTotal;
            return basicSalaryTotal;
        }
        console.log("HI");

    }

    function medicalAllowance(medicalAllowanceInput, basicSalaryInput, noOfMonth){
   
        medicalAllowanceTotal = medicalAllowanceInput*noOfMonth;
        medicalAllowanceInput = (basicSalaryInput*.1)*noOfMonth;
        medicalAllowanceNetTaxAmnt = medicalAllowanceTotal - medicalAllowanceInput

        document.getElementById("ma").innerText = medicalAllowanceInput;
        document.getElementById("maNa").innerText = medicalAllowanceNetTaxAmnt
        return medicalAllowanceNetTaxAmnt;

        console.log("HI");

    }

    function conveyanceAllowance(conveyanceallowanceInput, noOfMonth){
        let exemption = 2500;
        conveyanceAllowanceTotal = conveyanceallowanceInput*noOfMonth;
        conveynAllowanceExemption = exemption * noOfMonth;
        conveyanceAllowanceNetTAxAmnt = conveyanceAllowanceTotal - conveynAllowanceExemption;
        document.getElementById("caMi").innerText = conveynAllowanceExemption;
        document.getElementById("caNa").innerText = conveyanceAllowanceNetTAxAmnt;

        return conveyanceAllowanceNetTAxAmnt;

        console.log("HI");

    }

    function leaveFareAssistance(){
        //document.getElementById("lfa").innerText = leaveFareAssistance;
        document.getElementById("lfaNa").innerText = 0;

        return 0;
        console.log("HI");
    

    }

    function fastivalBonus1(festBonus, noOfFestival){
        totalFestivalBonus = festBonus * noOfFestival;
        document.getElementById("fbNa").innerText = totalFestivalBonus;

        return totalFestivalBonus;

        console.log("HI");

    }

    function otherTaxableBonus(otherAllowanceInput){
        
        document.getElementById("otb").innerText = otherAllowanceInput;
        return otherAllowanceInput;

        console.log("HI");

    }



      function taxableIncomeCalculation() {
        let basicSalary = parseFloat(document.getElementById("basic").value);
        let houseRent = parseFloat(document.getElementById("house").value);
        let medicalAllowance = parseFloat(document.getElementById("medical").value);
        let conveyanceallowance = parseFloat(document.getElementById("conveyance").value);
        let fastivalBonus = parseFloat(document.getElementById("festival").value);
        let otherAllowance = parseFloat(document.getElementById("otherAllowance").value);
    
        console.log(basicSalary+ " " + houseRent + " "+ medicalAllowance + " "+ conveyanceallowance + " "+ fastivalBonus +" "+ otherAllowance);
    
        let basicSalaryMonthly,basicSalaryYearly, houseRentMonthly, houseRentYearly,conveyanceallowanceYearly, medicalAllowanceMonthly, medicalAllowanceYearly;
        let otherAllowanceMonthly, otherAllowanceYearly, festivalBonusMonthly, festivalBonusYearly;
     
        basicSalaryMonthly = basicSalary;
        basicSalaryYearly = basicSalaryMonthly*12;

        document.getElementById("bs").innerText = basicSalaryYearly;
    
        console.log("basic salary: "+ basicSalary);
        console.log("Basic Salary Yearly: "+ basicSalaryYearly);
    
        let TotalHouseRentYearly = houseRent*12;
        let halfOfBasicSalary = basicSalaryYearly/2;
        console.log("Half of basic salary: "+ halfOfBasicSalary);
    
        houseRentYearly = Math.abs(TotalHouseRentYearly - halfOfBasicSalary);
    
        console.log("house Rent yearly : " + houseRentYearly);
    
        //let houseRentYearlyTaxableIncome = Math.min(houseRentYearly,300000);
    
       // console.log("house rent taxable incom: "+ houseRentYearlyTaxableIncome);
    
           // medicalAllowance = basicSalary*0.1;
           medicalAllowance = medicalAllowance*12 ;
           console.log("medical allowance yearly: "+medicalAllowance);
           console.log("10% of basic salary: "+ basicSalaryYearly*.1);
           
           medicalAllowance = medicalAllowance - (basicSalaryYearly*0.1);
           console.log("Medical allowance: "+ medicalAllowance);
           //medicalAllowanceYearly = Math.abs(medicalAllowance-30000);
         //  console.log("Medical allowance yearly: " + medicalAllowanceYearly);
    
        conveyanceallowance = conveyanceallowance*12;
        console.log("convayance allowance yearly: "+ conveyanceallowance);
        conveyanceallowanceYearly = Math.abs(conveyanceallowance-30000);
        console.log("Conveyance allowance yearly taxable income: "+ conveyanceallowanceYearly);
    
    
        festivalBonusYearly = fastivalBonus*2;
        console.log("festival bonus: "+ festivalBonusYearly);
    
    
        otherAllowanceYearly= otherAllowance;
        console.log("Others allowance: ", otherAllowanceYearly);
    
    
        let TotalTaxableIncome = basicSalaryYearly + houseRentYearly + medicalAllowance + conveyanceallowanceYearly +festivalBonusYearly  + otherAllowanceYearly;
    
        console.log("Total taxable income: "+ TotalTaxableIncome);
    
        document.getElementById("result").innerText = "Yearly Taxable Income: " + TotalTaxableIncome;
       // document.getElementById("ct0").innerHTML = "Yearly Taxable Income: " + TotalTaxableIncome;
    
    
    }

    // document.getElementById("cal").addEventListener("click", function(event){
    //     event.preventDefault();
    //     taxableIncomeCalculation();
    //     // taxableIncomeCalculation();
    //              // taxLiabilityCalculation(income);
        
    //   });




