//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("%WORKDIR%\\LoginPass\\Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["Web"]

