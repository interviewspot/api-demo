var organisation_organisation = 'organisation/organisation';

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", organisation_organisation + ".js");
    var done = assert.async();
    API.process(API.GET, '', '/benefit', function (result) {
        console.log('Method: ' + API.GET);
        console.log('Result: ' + result);
        done();
    });

});