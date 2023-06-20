//import file
eval(File.Include("FuncCommon.js"))
eval(File.Include("FuncLogin.js"))

function Test(params){
	Global.DoLoadObjects("ObjectsLogin.js")
	openBr();
	logIn('abc', '123')
	checkLogInFail()
	closeBr()
}

g_load_libraries=["Web"]

