eval(File.Include("FuncCommon.js"))
var btnAmThuc = "(//*[contains(@id,'header')]//a[text()=' Ẩm Thực'])[1]"
var btnBuffer = "(//*[contains(@id,'header')]//a[text()=' Ẩm Thực'])[1]"
var btnBufferSang = "(//*[contains(@id,'header')]//a[text()=' Ẩm Thực'])[1]"

class HomePage{
	function checkSearch() {
	}
	
	function selectBuffer() {
		clickElementbyXpath(btnAmThuc)
		clickElementbyXpath(btnBuffer)
		clickElementbyXpath(btnBufferSang)
	}
}

//export default HomePage
module.exports = HomePage