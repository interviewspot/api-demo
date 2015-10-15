var
    API = {
        username: "testuser",
        password: "p@ssword",
        url: "http://localhost/projects/apps/api/web/app_dev.php",
        getInfo: function () {
            return this.username + ' ' + this.password;
        },
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',

        process: function (method, data, route,callback) {
            console.log('preparing to call ajax');
            $.ajax({
                method: method,
                url: Setting.url + route,
                headers: {"x-username": Setting.username, "x-password": Setting.password},
                //data: {promotion: data}
                data: data
            })
                .done(function (result) {
                    callback(result);
                });
        }
    }

loadScript('core/core.js');

function loadScript(path){
    $.getScript(path, function () {
        console.log('loaded: ' + path);
    });
}

