const renderBlock = document.querySelector("#renderBlock")

const inputObj = {
    inputFirstLastName: document.querySelector("#inputFirstLastName"),
    inputEmail: document.querySelector("#inputEmail"),
    inputPassword: document.querySelector("#inputPassword"),
    inputPayment: document.querySelector("#inputPayment"),
}

const {inputFirstLastName, inputEmail, inputPassword, inputPayment} = inputObj

const btnReg = document.querySelector("#btnReg")

let cabinetObj

btnReg.addEventListener("click", () => {
    if (inputFirstLastName.value === "") {
        renderError()
    } else if (inputEmail.value === "") {
        renderError()
    } else if (inputPassword.value === "") {
        renderError()
    } else if (inputPayment.value === "" || isNaN(parseInt(inputPayment.value))) {
        renderError()
    } else {
        const valueInputFLName = inputFirstLastName.value
        cabinetObj = {
            name: valueInputFLName,
            email: inputEmail.value,
            password: inputPassword.value,
            payment: parseInt(inputPayment.value)
        }
        renderMenu(valueInputFLName.split(" "), cabinetObj)
    }
})

const transactionHistory = []

const renderMenu = (name, cabinetObj) => {
    const accountUser = {
        ...cabinetObj,
        withDrawMoney (value) {
            this.payment -= value
            let transaction = `Withdrawal amount: -${value}$`
            transactionHistory.push(transaction)
        },
        topUpBalance (value) {
            this.payment += value
            let transaction = `Replenishment amount: +${value}$`
            transactionHistory.push(transaction)
        }
    }

    renderBlock.innerHTML = ``
    renderBlock.innerHTML = `
        <div class="mainContent_mainBlock_centerBlock_menuBlock">
                    <div class="mainContent_mainBlock_centerBlock_menuBlock_centerText">
                        <h1 class="mainContent_mainBlock_centerBlock_menuBlock_centerText_titleText">Welcome! ${name[0]}</h1>
                    </div>
                    <div class="mainContent_mainBlock_centerBlock_menuBlock_centerText2">
                        <h1 class="mainContent_mainBlock_centerBlock_menuBlock_centerText2_miniText">Select operation:</h1>
                    </div>
                    <div class="mainContent_mainBlock_centerBlock_menuBlock_centerBlock">
                        <button id="btnWithDrawMoney" class="mainContent_mainBlock_centerBlock_menuBlock_centerBlock_button1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path d="M30 22.5C28.6193 22.5 27.5 23.6193 27.5 25V38.964L24.2678 35.732C23.2915 34.756 21.7086 34.756 20.7323 35.732C19.7559 36.7085 19.7559 38.2912 20.7323 39.2677L28.23 46.7658C29.2057 47.7413 30.7872 47.742 31.7637 46.7675L39.2625 39.2843C40.2387 38.3083 40.2387 36.725 39.2625 35.749C38.2862 34.7725 36.7035 34.7725 35.727 35.749L32.5 38.9757V25C32.5 23.6193 31.3807 22.5 30 22.5Z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5 2.5C56.6423 2.5 60 5.85788 60 10V20C60 24.1421 56.6423 27.5 52.5 27.5H47.5V50C47.5 54.1423 44.1423 57.5 40 57.5H20C15.8579 57.5 12.5 54.1423 12.5 50V27.5H7.5C3.35788 27.5 0 24.1421 0 20V10C0 5.85788 3.35788 2.5 7.5 2.5H52.5ZM55 20C55 21.3807 53.8807 22.5 52.5 22.5H47.5V17.5H50C51.3807 17.5 52.5 16.3807 52.5 15C52.5 13.6193 51.3807 12.5 50 12.5H10C8.6193 12.5 7.5 13.6193 7.5 15C7.5 16.3807 8.6193 17.5 10 17.5H12.5V22.5H7.5C6.1193 22.5 5 21.3807 5 20V10C5 8.6193 6.1193 7.5 7.5 7.5H52.5C53.8807 7.5 55 8.6193 55 10V20ZM17.5 17.5V50C17.5 51.3807 18.6193 52.5 20 52.5H40C41.3807 52.5 42.5 51.3807 42.5 50V17.5H17.5Z" class="icon-path"/>
                            </svg>
                            Withdraw money
                        </button>      
                        <button id="btnTopUpBalance" class="mainContent_mainBlock_centerBlock_menuBlock_centerBlock_button2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path d="M29.9948 47.4976C31.3755 47.4976 32.4948 46.3783 32.4948 44.9976V31.0336L35.727 34.2656C36.7033 35.2416 38.2862 35.2416 39.2625 34.2656C40.2389 33.2891 40.2389 31.7063 39.2625 30.7298L31.7648 23.2318C30.789 22.2563 29.2075 22.2555 28.231 23.2301L20.7323 30.7133C19.756 31.6893 19.756 33.2726 20.7323 34.2486C21.7085 35.2251 23.2913 35.2251 24.2678 34.2486L27.4948 31.0218L27.4948 44.9976C27.4948 46.3783 28.614 47.4976 29.9948 47.4976Z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5 2.5C56.6423 2.5 60 5.85788 60 10V20C60 24.1421 56.6423 27.5 52.5 27.5H47.5V50C47.5 54.1423 44.1423 57.5 40 57.5H20C15.8579 57.5 12.5 54.1423 12.5 50V27.5H7.5C3.35788 27.5 0 24.1421 0 20V10C0 5.85788 3.35788 2.5 7.5 2.5H52.5ZM55 20C55 21.3807 53.8807 22.5 52.5 22.5H47.5V17.5H50C51.3807 17.5 52.5 16.3807 52.5 15C52.5 13.6193 51.3807 12.5 50 12.5H10C8.6193 12.5 7.5 13.6193 7.5 15C7.5 16.3807 8.6193 17.5 10 17.5H12.5V22.5H7.5C6.1193 22.5 5 21.3807 5 20V10C5 8.6193 6.1193 7.5 7.5 7.5H52.5C53.8807 7.5 55 8.6193 55 10V20ZM17.5 17.5V50C17.5 51.3807 18.6193 52.5 20 52.5H40C41.3807 52.5 42.5 51.3807 42.5 50V17.5H17.5Z"/>
                            </svg>
                            Top up balance
                        </button>                    
                    </div>
                    <div class="mainContent_mainBlock_centerBlock_menuBlock_centerBlock2">
                        <button id="btnCheckBalance" class="mainContent_mainBlock_centerBlock_menuBlock_centerBlock2_button1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                <path d="M30.4551 61C47.2638 61 61 47.3747 61 30.5C61 13.6253 47.3536 0 30.4551 0C13.5566 0 0 13.716 0 30.5907C0 47.3747 13.6454 61 30.4551 61ZM28.768 33.0864C23.1647 31.1317 19.6704 28.3035 19.6704 23.2808C19.6704 18.649 22.7429 15.0087 28.3765 13.8661V8.84239H32.5933V13.6253C36.0876 13.6253 38.6183 14.3467 40.486 15.3402L38.7686 21.3563C37.3832 20.7851 35.124 19.8218 32.0211 19.8218C28.9183 19.8218 27.2312 21.3563 27.2312 22.8899C27.2312 24.9957 29.1887 25.8078 33.4066 27.5216C39.1602 29.6274 41.8412 32.5454 41.8412 37.3273C41.8412 42.1092 38.919 45.7495 32.7436 47.1329V51.9158H28.5268V47.284C24.8821 47.284 21.2072 46.3218 19.4292 45.3293L20.966 39.163C22.9236 40.1253 25.9971 41.2689 29.2503 41.2689C32.7446 41.2689 34.462 39.7343 34.462 37.6295C34.462 35.5247 32.8042 34.6512 28.768 33.0864Z"/>
                            </svg>
                            Check the balance amount
                        </button>      
                        <button id="btnTransHistory" class="mainContent_mainBlock_centerBlock_menuBlock_centerBlock2_button2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path d="M30 20V30L36.25 36.25"  stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.8446 17.1765L8.96965 17.186C8.9748 18.2141 9.80703 19.0463 10.8352 19.0515L10.8446 17.1765ZM17.1991 19.0835C18.2346 19.0887 19.0783 18.2534 19.0835 17.2179C19.0887 16.1824 18.2534 15.3387 17.2179 15.3335L17.1991 19.0835ZM12.6876 10.8032C12.6824 9.7677 11.8387 8.93245 10.8032 8.93765C9.7677 8.94287 8.93245 9.78655 8.93767 10.8221L12.6876 10.8032ZM9.375 30C9.375 28.9645 8.53553 28.125 7.5 28.125C6.46448 28.125 5.625 28.9645 5.625 30H9.375ZM42.1888 51.113C43.0853 50.5945 43.3915 49.4475 42.873 48.551C42.3545 47.6548 41.2075 47.3482 40.3112 47.867L42.1888 51.113ZM47.867 40.3112C47.3482 41.2075 47.6548 42.3545 48.551 42.873C49.4475 43.3915 50.5945 43.0853 51.113 42.1888L47.867 40.3112ZM12.8508 12.6782C12.1149 13.4067 12.109 14.5939 12.8376 15.3298C13.5662 16.0656 14.7534 16.0715 15.4892 15.343L12.8508 12.6782ZM47.1558 12.8446C37.6053 3.29415 22.1721 3.19745 12.6848 12.6848L15.3364 15.3364C23.3342 7.33863 36.393 7.3851 44.5042 15.4963L47.1558 12.8446ZM12.6848 12.6848L9.5188 15.8507L12.1704 18.5023L15.3364 15.3364L12.6848 12.6848ZM10.8352 19.0515L17.1991 19.0835L17.2179 15.3335L10.854 15.3015L10.8352 19.0515ZM12.7196 17.1671L12.6876 10.8032L8.93767 10.8221L8.96965 17.186L12.7196 17.1671ZM30 9.375C41.3908 9.375 50.625 18.6091 50.625 30H54.375C54.375 16.538 43.462 5.625 30 5.625V9.375ZM30 50.625C18.6091 50.625 9.375 41.3908 9.375 30H5.625C5.625 43.462 16.538 54.375 30 54.375V50.625ZM40.3112 47.867C37.2795 49.6207 33.7598 50.625 30 50.625V54.375C34.4368 54.375 38.6017 53.188 42.1888 51.113L40.3112 47.867ZM50.625 30C50.625 33.7598 49.6207 37.2795 47.867 40.3112L51.113 42.1888C53.188 38.6017 54.375 34.4368 54.375 30H50.625ZM15.4892 15.343C19.2177 11.6515 24.3412 9.375 30 9.375V5.625C23.3135 5.625 17.2528 8.31977 12.8508 12.6782L15.4892 15.343Z"/>
                            </svg>
                            Transaction history
                        </button>                    
                    </div>
                </div>
    `
    const allBtnRender = {
        btnWithDrawMoney: document.querySelector("#btnWithDrawMoney"),
        btnTopUpBalance: document.querySelector("#btnTopUpBalance"),
        btnCheckBalance: document.querySelector("#btnCheckBalance"),
        btnTransHistory: document.querySelector("#btnTransHistory"),
    }

    const {btnWithDrawMoney, btnTopUpBalance, btnCheckBalance, btnTransHistory} = allBtnRender

    btnWithDrawMoney.addEventListener("click", () => {
        console.log(accountUser)
        renderBlock.innerHTML = ``
        renderBlock.innerHTML = `
            <div class="mainContent_mainBlock_centerBlock_inputWithDrawMoneyForm">
                <h1 class="mainContent_mainBlock_centerBlock_inputWithDrawMoneyForm_titleText">How much do you want to withdraw?</h1>
                <div class="mainContent_mainBlock_centerBlock_inputWithDrawMoneyForm_inputCenter">
                    <input id="CheckInput1" class="mainContent_mainBlock_centerBlock_inputWithDrawMoneyForm_inputCenter_input" type="text">
                </div>
                <div class="mainContent_mainBlock_centerBlock_inputWithDrawMoneyForm_buttonCenter">
                    <button id="btnAccept1" class="mainContent_mainBlock_centerBlock_inputWithDrawMoneyForm_buttonCenter_button">Continue</button>
                </div>
            </div>
        `
        const btnAccept1 = document.querySelector("#btnAccept1")
        const CheckInput1 = document.querySelector("#CheckInput1")
        btnAccept1.addEventListener("click", () => {
            if (CheckInput1.value === "" || isNaN(CheckInput1.value) || accountUser.payment <= 0) {
                renderError()
            } else {
                accountUser.withDrawMoney(parseInt(CheckInput1.value))
                renderBlock.innerHTML = ``
                renderBlock.innerHTML = `
                    <div class="mainContent_mainBlock_centerBlock_doneForm">
                        <div class="mainContent_mainBlock_centerBlock_doneForm_svgCenter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="204" viewBox="0 0 202 204" fill="none">
                                <path d="M66 103.5L93.4223 124.271C96.9447 126.938 101.907 126.413 104.807 123.068L158.583 61" stroke="#12A921" stroke-width="10" stroke-linecap="round"/>
                                <path d="M176.75 102C176.75 117.984 171.793 133.566 162.573 146.56C153.354 159.553 140.336 169.302 125.349 174.44C110.362 179.578 94.1573 179.846 79.011 175.206C63.865 170.566 50.5386 161.251 40.9035 148.571C31.2683 135.89 25.8085 120.479 25.2906 104.503C24.7727 88.5275 29.2229 72.7892 38.0162 59.4989C46.8095 46.2086 59.5041 36.0336 74.3171 30.4032C89.13 24.7727 105.318 23.9697 120.606 28.1067" stroke="#12A921" stroke-width="10" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="mainContent_mainBlock_centerBlock_doneForm_titleCenter">
                            <h1 class="mainContent_mainBlock_centerBlock_doneForm_titleCenter_titleText">Done!</h1>
                        </div>
                        <div class="mainContent_mainBlock_centerBlock_doneForm_miniCenter">
                            <p class="mainContent_mainBlock_centerBlock_doneForm_miniCenter_miniText">Balance on your account: ${accountUser.payment}$</p>
                        </div>
                        <button id="doneBtn1" class="mainContent_mainBlock_centerBlock_doneForm_btnTryAgain">Return to menu</button>
                    </div>
                `
                const doneBtn1 = document.querySelector("#doneBtn1")
                doneBtn1.addEventListener("click", () => {
                    console.log(transactionHistory)
                    console.log(accountUser)
                    renderMenu(name, accountUser)
                })
            }
        })
    })

    btnTopUpBalance.addEventListener("click", () => {
        renderBlock.innerHTML = ``
        renderBlock.innerHTML = `
            <div class="mainContent_mainBlock_centerBlock_inputTopUpBalanceForm">
                <h1 class="mainContent_mainBlock_centerBlock_inputTopUpBalanceForm_titleText">How much would you like to top up?</h1>
                <div class="mainContent_mainBlock_centerBlock_inputTopUpBalanceForm_inputCenter">
                    <input id="CheckInput2" class="mainContent_mainBlock_centerBlock_inputTopUpBalanceForm_inputCenter_input" type="text">
                </div>
                <div class="mainContent_mainBlock_centerBlock_inputTopUpBalanceForm_buttonCenter">
                    <button id="btnAccept2" class="mainContent_mainBlock_centerBlock_inputTopUpBalanceForm_buttonCenter_button">Continue</button>
                </div>
            </div>     
        `
        const btnAccept2 = document.querySelector("#btnAccept2")
        const CheckInput2 = document.querySelector("#CheckInput2")
        btnAccept2.addEventListener("click", () => {
            if (CheckInput2.value === "" || isNaN(CheckInput2.value)) {
                renderError()
            } else {
                accountUser.topUpBalance(parseInt(CheckInput2.value))
                renderBlock.innerHTML = ``
                renderBlock.innerHTML = `
                    <div class="mainContent_mainBlock_centerBlock_doneForm">
                        <div class="mainContent_mainBlock_centerBlock_doneForm_svgCenter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="204" viewBox="0 0 202 204" fill="none">
                                <path d="M66 103.5L93.4223 124.271C96.9447 126.938 101.907 126.413 104.807 123.068L158.583 61" stroke="#12A921" stroke-width="10" stroke-linecap="round"/>
                                <path d="M176.75 102C176.75 117.984 171.793 133.566 162.573 146.56C153.354 159.553 140.336 169.302 125.349 174.44C110.362 179.578 94.1573 179.846 79.011 175.206C63.865 170.566 50.5386 161.251 40.9035 148.571C31.2683 135.89 25.8085 120.479 25.2906 104.503C24.7727 88.5275 29.2229 72.7892 38.0162 59.4989C46.8095 46.2086 59.5041 36.0336 74.3171 30.4032C89.13 24.7727 105.318 23.9697 120.606 28.1067" stroke="#12A921" stroke-width="10" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="mainContent_mainBlock_centerBlock_doneForm_titleCenter">
                            <h1 class="mainContent_mainBlock_centerBlock_doneForm_titleCenter_titleText">Done!</h1>
                        </div>
                        <div class="mainContent_mainBlock_centerBlock_doneForm_miniCenter">
                            <p class="mainContent_mainBlock_centerBlock_doneForm_miniCenter_miniText">Balance on your account: ${accountUser.payment}$</p>
                        </div>
                        <button id="doneBtn2" class="mainContent_mainBlock_centerBlock_doneForm_btnTryAgain">Return to menu</button>
                    </div>
                `
                const doneBtn2 = document.querySelector("#doneBtn2")
                doneBtn2.addEventListener("click", () => {
                    console.log(transactionHistory)
                    console.log(accountUser)
                    renderMenu(name, accountUser)
                })
            }
        })
    })
    
    btnCheckBalance.addEventListener("click", () => {
        const {payment} = cabinetObj
        renderBlock.innerHTML = ``
        renderBlock.innerHTML = `
            <div class="mainContent_mainBlock_centerBlock_balanceBlock">
                <h1 class="mainContent_mainBlock_centerBlock_balanceBlock_titleText">Your balance is: ${payment}$</h1>
                <div class="mainContent_mainBlock_centerBlock_balanceBlock_buttonCenter">
                    <button id="btnReturn" class="mainContent_mainBlock_centerBlock_balanceBlock_buttonCenter_button">Return to menu</button>
                </div>
            </div>    
        `
        const btnReturn = document.querySelector("#btnReturn")
        btnReturn.addEventListener("click", () => {
            console.log(accountUser)
            renderMenu(name, accountUser)
        })
    })

    btnTransHistory.addEventListener("click", () => {
        renderBlock.innerHTML = ``
        renderBlock.innerHTML = `
                <div class="mainContent_mainBlock_centerBlock_historyForm">
                    <h1 class="mainContent_mainBlock_centerBlock_historyForm_titleText">Your transaction history:</h1>
                    <div class="mainContent_mainBlock_centerBlock_historyForm_blockCenter">
                        <div id="transactionBlock" class="mainContent_mainBlock_centerBlock_historyForm_blockCenter_blockHistory">
                        </div>
                    </div>
                    <div class="mainContent_mainBlock_centerBlock_historyForm_btnCenter">
                        <button id="btnReturn" class="mainContent_mainBlock_centerBlock_historyForm_btnCenter_btnReturnToMenu">Return to menu</button>
                    </div>
                </div>  
        `

        const transactionBlock = document.querySelector("#transactionBlock")
        transactionBlock.innerHTML = ''

        const btnReturn = document.querySelector("#btnReturn")

        transactionHistory.forEach((transiction) => {
            const textItem = document.createElement("p")
            textItem.classList.add("mainContent_mainBlock_centerBlock_historyForm_blockCenter_blockHistory_textDown")
            textItem.textContent = transiction
            
            transactionBlock.appendChild(textItem)
        })

        btnReturn.addEventListener("click", () => {
            console.log(transactionHistory)
            console.log(accountUser)
            renderMenu(name, accountUser)       
        })
    })
}

const renderError = () => {
    renderBlock.innerHTML = ``
    renderBlock.innerHTML = `
            <div class="mainContent_mainBlock_centerBlock_errorForm">
                    <div class="mainContent_mainBlock_centerBlock_errorForm_svgCenter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="157" height="150" viewBox="0 0 157 150" fill="none">
                            <g clip-path="url(#clip0_1_55)">
                              <path d="M133.962 22.0109C103.415 -7.17388 53.5847 -7.17388 22.8673 22.0109C-7.67941 51.1957 -7.67941 98.8044 22.8673 128.152C38.226 142.826 58.363 150.163 78.3293 150.163C98.4662 150.163 118.603 142.826 133.791 128.152C164.679 98.8044 164.679 51.1957 133.962 22.0109ZM32.5945 118.859C9.0445 96.1957 7.50863 60.3261 27.9869 36.0326L119.286 123.261C93.8586 142.826 56.3152 141.522 32.5945 118.859ZM129.013 113.967L37.7141 26.7392C49.4891 17.6087 63.9945 13.0435 78.4999 13.0435C95.0532 13.0435 111.777 19.0761 124.405 31.1413C147.955 53.8044 149.491 89.674 129.013 113.967Z" fill="#FF0000"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_1_55">
                                <rect width="157" height="150" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="mainContent_mainBlock_centerBlock_errorForm_titleCenter">
                        <h1 class="mainContent_mainBlock_centerBlock_errorForm_titleCenter_titleText">Oops!</h1>
                    </div>
                    <div class="mainContent_mainBlock_centerBlock_errorForm_miniCenter">
                        <p class="mainContent_mainBlock_centerBlock_errorForm_miniCenter_miniText">Try again</p>
                    </div>
                    <button id="tryAgain" class="mainContent_mainBlock_centerBlock_errorForm_btnTryAgain">Try again</button>
                </div>
            </div>
    `
    document.body.style.background = 'linear-gradient(118deg, #FF4B4B 0.27%, #EE722C 89.1%)'
    const tryAgainBtn = document.querySelector("#tryAgain")
    tryAgainBtn.addEventListener("click", () => {
        document.body.style.background = 'linear-gradient(143deg, rgba(255, 0, 0, 0.20) 0.44%, rgba(250, 255, 0, 0.20) 73.86%), linear-gradient(116deg, #3687FF -4.55%, #D176F1 100%)'
        location.reload()
    })
}