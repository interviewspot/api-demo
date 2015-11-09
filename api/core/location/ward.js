var location_ward = 'core/location/ward';


QUnit.test("CRUD " + location_ward, function (assert) {
    console.log('testing ' + location_ward + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_ward = {
        //"country": "1",
        "name": "ssss",
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_wards.post']);
    post_data = {ward: data_ward};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_ward, post_data, put_data, undefined, undefined, assert, done);
})
;
