var location_province = 'core/location/province';


QUnit.test("CRUD " + location_province, function (assert) {
    console.log('testing ' + location_province + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_province = {
        //"country": "1",
        "name": "ss",
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_provinces.post']);
    post_data = {province: data_province};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_province, post_data, put_data, undefined, undefined, assert, done);
})
;
