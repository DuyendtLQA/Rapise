//import file 
eval(File.Include("FuncCommon.js"))
eval(File.Include("FuncHome.js"))

function TestInit(){
	Tester.Message('Check Home Page')
	openBr()
}

function TestFinish(){
	closeBr()
}

function Test(params){
	Global.DoLoadObjects("ObjectsHome.js");
	checkSearch()
}

g_load_libraries=["Web"]

