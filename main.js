// değişkenleri yada elemenetleri tanımla olustur
const nameInput = document.getElementById('name-input')
const PriceInput = document.getElementById('price-input')
const addBtn = document.getElementById('add-btn')
const listArea = document.getElementById('list')
const statusCheckbox = document.getElementById('status-check')
const sumInfo = document.getElementById('sum-info')
const userInfo = document.getElementById('user-input')
const select = document.getElementById('select')
const deleteBtn = document.getElementById('delete-btn')
const editBtn = document.getElementById('edit-btn')

let sum = 0
// olayları tanımlama
addBtn.addEventListener('click', addExpense)
listArea.addEventListener('click', handleUptade)



//harcama ekle

function addExpense(event){
    //sayfa yinelemeyi engelle
    event.preventDefault()

    if (!nameInput.value || !PriceInput.value ) {
        alert("alanlar bos olmaz")
        return
    }
    const expenseDiv = document.createElement('div')
    expenseDiv.classList.add('expense')

    if(statusCheckbox.checked) {
        expenseDiv.classList.add('paid')
    }
    console.log(nameInput.value + PriceInput.value)
    expenseDiv.innerHTML = `
    <h2 class="name"> ${nameInput.value}</h2>
    <h2 class="price"> ${PriceInput.value}</h2>
    <div class="btns">
    <img id="edit" src="images/pay-icon.png"/>
    <img id="delete" src="images/delete-icon.png"/>
    </div>

    `
    listArea.appendChild(expenseDiv)

    //toplamı değişitir
    uptadeSum(PriceInput.value)
     nameInput.value = ""
     PriceInput.value = ""
     statusCheckbox.checked = false
     
     console.log(listArea)
}

///toplamı güncelle

function uptadeSum(price){
    sum += Number(price)

    sumInfo.innerText = sum

}

// liste eleamnlarının üzerndeki işlemleri yönet 

function handleUptade(event){

    //tıklanılan item target denince o elemana tıklarız
const item = event.target

const parent = item.parentElemnt.parentElement
//silme tıklanırsa
if (item.id == "delete") {
    parent.remove()

    ///toplam biligisini gücenlle
    const price = parent.querySelector('.price').textContent
    uptadeSum(Number(price)*-1)
} 

//güncelleme tıklanrısa
if(item.id=="edit"){
    parent.classList.toggle('paid')
}
}

//kullanıcıyı locale kaydet 

function saveUser(event) {
    localStorage.setItem('user', event.target.value)
}


//kullanıcıyı localden al

function getUser(){
    const username = localStorage.getItem('user') || ''
    userInfo.value = username
}