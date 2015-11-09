var location_street = 'core/location/street';


QUnit.test("CRUD " + location_street, function (assert) {
    console.log('testing ' + location_street + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_street = {
        "name": "ss"
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_street.post']);
    post_data = {street: data_street};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_street, post_data, put_data, undefined, undefined, assert, done);
})
;
