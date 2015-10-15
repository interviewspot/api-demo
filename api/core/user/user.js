var core_user_user = 'core/user/user.js';

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", core_user_user + "");
    var done = assert.async();
    API.process(API.GET, '', '/benefit', function (result) {
        console.log('Method: ' + API.GET);
        console.log('Result: ' + result);
        done();
    });

});