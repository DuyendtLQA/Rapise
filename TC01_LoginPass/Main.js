//import file
eval(File.Include("FuncCommon.js"))
eval(File.Include("FuncLogin.js"))

function Test(params){
	Global.DoLoadObjects("ObjectsLogin.js")
	openBr();
	logIn('xyzt', '1234')
	checkLogInPass()
	closeBr()
}

g_load_libraries=["Web"]

