var username = "testuser";
var password = "p@ssword";
var url = "http://localhost/projects/apps/api/web/app_dev.php";

var
    Setting = {
        username: "testuser",
        password: "p@ssword",
        url: "http://localhost/projects/apps/api/web/app_dev.php",
        getInfo: function () {
            return this.username + ' ' + this.password;
        }
    }

