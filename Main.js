eval(File.Include("FuncCommon.js"))

function Test(params){
	Global.DoRunTestSet("RegressionTest.js");
//	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["Web"]