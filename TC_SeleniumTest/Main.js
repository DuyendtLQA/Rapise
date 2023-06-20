//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	WebDriver.CreateDriver(null)
	//Open the URL for the www.libraryinformationsystem.org website:
	WebDriver.SetUrl('http://www.libraryinformationsystem.org');
	//Find the body element and verify the text in it
	var el = WebDriver.FindElementByXPath("//body");
	Tester.Assert("Text found in BODY", el.GetText().indexOf("Library Information System")!= -1);
	//Click on the login link
	var logInLink = WebDriver.FindElementById('HeadLoginView_HeadLoginStatus');
	logInLink.Click();
	//Make sure the input textbox is as expected
	var userName = WebDriver.FindElementByCssSelector("#MainContent_LoginUser_UserName");
	Tester.AssertEqual("class is 'textbox'", "textbox", userName.GetAttribute("class"));
	//Go to a different URL (http://libraryinformationsystem.org/HtmlTest.htm)
	WebDriver.SetUrl('http://www.libraryinformationsystem.org/HtmlTest.htm');
	//Click on the Alert box
	var alertBtn = WebDriver.FindElementById("btnAlert");
	alertBtn.Click();
	//Switch to this alert box and close
	var alertElement = WebDriver.SwitchToAlert();
	alertElement.Accept();
	//Shut down Selenium
	WebDriver.Quit()

}

g_load_libraries=["Web"]

