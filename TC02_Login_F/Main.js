//import file
eval(File.Include("FuncCommon.js"))
eval(File.Include("FuncLogin.js"))
var dataLogin = 0

function TestInit(){
	Tester.Message('Check Home Page')
//get data driven	
	dataLogin = getDataLogin()
	openBr()
}

function TestFinish(){
	closeBr()
}

function Test(params){
	Global.DoLoadObjects("ObjectsLogin.js")
	for(var i=0; i<dataLogin.length; i++) {
		logIn(dataLogin[i].user, dataLogin[i].pass)
		checkLogInFail()
	}
}

g_load_libraries=["Web"]
