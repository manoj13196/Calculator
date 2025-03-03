    const buttonValues = [
        "AC", "+/-", "%", "⬅",
        "7", "8", "9", "/",
        "4", "5", "6", "x",
        "1", "2", "3", "-",
        "0", ".",  "=", "+", 
    ];

    const rightSymbols=["+","-","/","x","="];
    const topSymbols=["AC","+/-","%"]

    let A=0;
    let operator=null;
    let B=null;

    function clearAll(){
        A=0;
        operator=null;
        B=null;
        display.value="";

    }

    let calculator = document.getElementById("calculator");

    let display = document.createElement("input");
    display.setAttribute("type", "text");
    display.setAttribute("id", "display");
    display.setAttribute("readonly", "true");
    calculator.appendChild(display);

    let buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", "buttonsContainer");
    calculator.appendChild(buttonsContainer);

    buttonValues.forEach(value => {
        const button = document.createElement("button");
        button.textContent = value;
        button.setAttribute("data-value", value);
        buttonsContainer.appendChild(button);

        if(rightSymbols.includes(value)){
            button.style.backgroundColor="#ff9500"
        }
        else if(topSymbols.includes(value)){
            button.style.backgroundColor="#D4D4D2"
            button.style.color="#1C1C1C";
        }

        button.addEventListener("click",eventhandler)

    });

    function eventhandler(event){
        let value=event.target.getAttribute("data-value");
        console.log("Clicked Button:", value);
        console.log("Current A:", A, "Current B:", B, "Current Operator:", operator);
        if(rightSymbols.includes(value)){
            if(value==="="){
                if(A!=null && operator && display.value !== ""){
                    B=display.value;
                    let numA=Number(A);
                    let numB=Number(B);

                    if(operator=="+")
                    {
                        display.value=numA+numB;
                    }
                    else if(operator=="-"){
                        display.value=numA-numB;
                    }
                    else if(operator=="x"){
                        display.value=numA*numB;
                    }
                    else if(operator=="/"){
                        display.value=numA/numB;
                    }
                }

                

            }
            else{
                if (display.value !== "" && !rightSymbols.includes(display.value.slice(-1))) {
                    operator = value;
                    A = display.value;
                    display.value = "";
                }
            }

        }
        else if(topSymbols.includes(value)){
            if(value=="AC"){
                
                clearAll();

            }
            else if(value==="+/-"){
                if(display.value!==""&&display.value!==0){
                    if(display.value[0]==="-"){
                        display.value=display.value.slice(1);
                    }
                    else{
                        display.value="-"+display.value;
                    }

                }
            }
            else if(value=="%"){
                display.value=Number(display.value)/100;
            }

        }
        else if(value==="⬅"){
            if (display.value.length > 0) {
                display.value = display.value.slice(0, -1);
            }
            }
        else{
            if(value==="."){
                if(display.value!=""&&!display.value.includes(".")){
                    display.value+=value;
                }

            }
            else if(display.value=='0'){
                display.value=value;

            }
            else{
                display.value+=value;
            }

        }

    }
