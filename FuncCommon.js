
var url = 'https://www.programsbuzz.com/user/login'

function openBr(browser) {
	Navigator.Open(url);
}

function closeBr() {
	Navigator.Close();
}

function sendKey(locator, text) {
	SeS(locator).DoSetText(text);
}

function clickElement(locator) {
	SeS(locator).DoClick();
}


// selenium
function openBrSe(url) {
	WebDriver.CreateDriver(null)
	WebDriver.SetUrl(url);
}

function closeBrSe() {
	WebDriver.Quit()
}

function clickElement(locator) {
	return WebDriver.FindElementByCssSelector(locator).Click()
}

function clickElementbyXpath(locator) {
	return WebDriver.FindElementByXPath(locator).Click()
}

function setUrl(url) {
	return WebDriver.SetUrl(url);
}

function sendKeys(locator, text) {
	return WebDriver.FindElementByCssSelector(locator).SendKeys(text)
}