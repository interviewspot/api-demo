var location_district = 'core/location/district';


QUnit.test("CRUD " + location_district, function (assert) {
    console.log('testing ' + location_district + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_district = {
       //"city": "1",
        "name": "ss",
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_districts.post']);
    post_data = {district: data_district};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_district, post_data, put_data, undefined, undefined, assert, done);
})
;
