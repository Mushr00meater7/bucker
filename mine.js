var t_balance = document.getElementById('balance')
var t_income = document.getElementById('income')
var t_rate = document.getElementById('rate')


var predatas = '{"income":0,"rate":"","balance":0}'
var datas = JSON.parse(predatas)

var t_reward = document.getElementById('countReward')

var db = true
mineInt = ""
function save() {
    localStorage.setItem("balance1", datas['balance'])
    localStorage.setItem("income1", datas['income'])
}
function load() {
    console.log(localStorage.getItem("balance1"))
    console.log(localStorage.getItem("income1"))
    datas['income'] = parseInt(localStorage.getItem("income1"))
    datas['balance'] = parseInt(localStorage.getItem("balance1"))
}
function choose() {
    console.log(db)

    if (db == false) {
        mineInt = setInterval(start, 1000)
        datas['income'] = localStorage.getItem('income')
        db = true
    } else if (db == true) {
        clearInterval(mineInt)
        stop()
        datas['income'] = localStorage.getItem('income')
        db = false
    }
}

function start() {
    //set values to started default
    //income setted in choose()
    datas['balance'] = datas['balance'] + datas['income']
    datas['rate'] = datas['income'] + "/s"

    t_balance.innerText = "balance  : " + datas['balance']
    t_income.innerText = "income : " + datas['income']
    t_rate.innerText = datas['rate']


    console.log(datas)
}
function stop() {

}

function upgrade1() {
    if (datas['balance'] >= 2500) {
        income = 1.5
    } else {
        console.log('not enought bucks')
    }
}

function reward() { 
    time = 10
    t_reward.innerText = time
    setInterval(count,60000)
    function count() {
        console.log(time)
        t_reward.innerText = time
        if (time >= 0) {
            time = time - 1
        } else if (time <= 0) { 
            time = 10
        }
    }
}
reward()