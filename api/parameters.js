var username = "testuser";
var password = "123456789";
var url = "http://localhost/projects/apps/api/web/app_dev.php";

var
    Setting = {
        password: "123456789",

        username: "testuser",
        //username: "kenneth.yap@ap.magenta-consulting.com",
        url: "http://localhost/api/web/app_dev.php",
        //url: 'https://api.sg-benefits.com',

        app: '/apps',
        getInfo: function () {
            return this.username + ' ' + this.password;
        }
    }

