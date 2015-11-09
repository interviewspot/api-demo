var location_city = 'core/location/city';


QUnit.test("CRUD " + location_city, function (assert) {
    console.log('testing ' + location_city + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_city = {
       // "province": "1",
        "name": "ss",
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_cities.post']);
    post_data = {city: data_city};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_city, post_data, put_data, undefined, undefined, assert, done);
})
;
