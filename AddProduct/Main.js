//import file
eval(File.Include("FuncCommon.js"))
var id_product = `(//div[@class='product__image'])[1]`
var btn_add_cart = "//button[@id='add-to-cart']"

function Test(id_product){
	setUrl('https://www.hotdeal.vn/ho-chi-minh/buffet-sang-trong/')
	clickElementbyXpath(id_product)
	clickElementbyXpath(btn_add_cart)
}

g_load_libraries=["Web"]