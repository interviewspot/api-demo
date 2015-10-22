var username = "testuser";
var password = "p@ssword";
var url = "http://localhost/projects/apps/api/web/app_dev.php";

var
    Setting = {
        password: "p@ssword",

        //username: "testuser",
        username: "kenneth.yap@ap.magenta-consulting.com",
        //url: "http://localhost/projects/apps/api/web/app_dev.php",
        url: 'https://api.sg-benefits.com',

        app: '/apps',
        getInfo: function () {
            return this.username + ' ' + this.password;
        }
    }

