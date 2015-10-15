var core_user_user = 'core/user/user';

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", core_user_user + ".js");
    var done = assert.async();
    //API.process(API.GET, '', '/benefit', function (result) {
    //    console.log('Method: ' + API.GET);
    //    console.log('Result: ' + result);
    //    done();
    //});

    var a = new HttpAgent(Setting.url + '/sgbenefit', {
        'x-username': Setting.username,
        'x-password': Setting.password
    });
    a.navigate(['organisations','first']);

    a.get(function (response) {
        console.log(response);
        console.log(response.isOk());
    });

});
