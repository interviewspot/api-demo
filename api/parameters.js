var username = "testuser";
var password = "p@ssword";
var url = "http://localhost/projects/apps/api/web/app_dev.php";

var
    Setting = {
        //username: "testuser",
        username: "kenneth.yap@ap.magenta-consulting.com",
        password: "p@ssword",
        //url: "http://localhost/projects/apps/api/web/app_dev.php",
        url: 'https://api.sg-benefits.com',
        app: '/sgbenefit',
        getInfo: function () {
            return this.username + ' ' + this.password;
        }
    }

