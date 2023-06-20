//Use 'Record/Learn' button to begin test recording
eval(File.Include("FuncCommon.js"))

function TestInit(){
	openBrSe('http://www.libraryinformationsystem.org')
}

function TestFinish(){
	closeBrSe()
}

function Test(params)
{
	var el = getElementbyXpath("//body");
	Tester.Assert("Text found in BODY", el.GetText().indexOf("Library Information System")!= -1);

	getElementByID('HeadLoginView_HeadLoginStatus').Click()
	
	var userName = getElement("#MainContent_LoginUser_UserName");
	Tester.AssertEqual("class is 'textbox'", "textbox", userName.GetAttribute("class"));

	setUrl('http://www.libraryinformationsystem.org/HtmlTest.htm');
	getElementByID("btnAlert").Click();
	WebDriver.SwitchToAlert().Accept();
}

g_load_libraries=["Web"]

