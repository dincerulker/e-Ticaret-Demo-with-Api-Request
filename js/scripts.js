/* API Get
*********************************************************/

document.getElementById("current-year").innerHTML = new Date().getFullYear();


/* API Get
*********************************************************/

var apiUrl = "https://api.akilliticaretim.com";
var guid = "0739-E657-C4F4-98B4";
/***************************************************************************/
var listProducts = apiUrl + "/api/Product/ListProducts/1"; // GET error
var listCategories = apiUrl + "/api/Product/ListCategories"; // GET success
var listBrands = apiUrl + "/api/Product/ListBrands"; // GET success
/***************************************************************************/
var apiUsername = "user";
var apiPassword = "123456";
var base64Username = btoa(apiUsername + ":" + apiPassword);

$.ajax({
    url: listCategories,
    type: 'GET',
    contentType: 'application/json;',
    headers: {
        "GUID": guid,
        "Authorization": "Basic " + base64Username,
    },
    auth: {
        "Username": apiUsername,
        "Password": apiPassword,
    },
    success: function (result) {
        console.log(result);
        $.each(result.data, function (key, value) {
            $(".beyaz-esya-dropdown").append('<li><a class="dropdown-item" href="#">' + value.categoryName + '</a></li>');
        });
    },
    error: function (error) {
        console.log(error);
    }
});
