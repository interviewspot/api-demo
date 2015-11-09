var location_country = 'core/location/country';


QUnit.test("CRUD " + location_country, function (assert) {
    console.log('testing ' + location_country + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_country = {
        "code": "1111",
        "name": "ss",
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_countries.post']);
    post_data = {country: data_country};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_country, post_data, put_data, undefined, undefined, assert, done);
})
;
