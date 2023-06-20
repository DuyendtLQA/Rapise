//import file
eval(File.Include("FuncCommon.js"))
eval(File.Include("FuncLogin.js"))

function Test(params){
	Global.DoLoadObjects("ObjectsLogin.js")
	openBr();
	logIn('xyzt', '1234')
	checkLogInPass()
	closeBr()
	RVL.DoPlayScript("%WORKDIR%\\TC01_Login_P\\Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["Web"]

