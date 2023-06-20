eval(File.Include("FuncCommon.js"))
var btnPopLogin = '//*[@id="login-popup-header-form"]/a'
var inputUser = "#user_login"
var inputPass = "#password"
var btnLogin = "//button[text()='ÐĂNG NHẬP']"

function logIn(use, pass) {
	sendKey('Username',use)
	clickElement('HTML')
	clickElement('Username')
	clickElement('Password')
	sendKey('Password',pass)
	clickElement('op')
}

function checkLogInPass() {
	Global.DoSleep(1000)
}

function checkLogInFail() {
	Global.DoSleep(5000)
}

function getDataLogin() {
	Spreadsheet.DoAttach('DataLogin.xlsx');
	var data = []
    while(Spreadsheet.DoSequential()) {
        var user = Spreadsheet.GetCell(0);
        var pass = Spreadsheet.GetCell(1);
        data.push({
        	user: user,
        	pass: pass
        	}
        )
        
    }
    return data
}

function loginHotDeal() {
	clickElementbyXpath(btnPopLogin)
	sendKeys(inputUser,'fdsfd@gmail.com')
	sendKeys(inputPass,'FzZfPVS4wp5z@6S')
	clickElementbyXpath(btnLogin)
}