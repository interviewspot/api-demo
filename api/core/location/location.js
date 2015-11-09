var location_location = 'core/location/location';

QUnit.test("CRUD " + location_location, function (assert) {
    console.log('testing ' + location_location + ".js");
    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_location = {
        "active": "1",
        "name": "1",
        "geo_lat": "1",
        "geo_lng": "1"
    };
    a.navigate(['inspot']);
    a.navigate(['locations.post']);
    post_data = {location: data_location};
    put_data = JSON.parse(JSON.stringify(post_data));
    //put_data.location.title = 'hello title update';
    API.testCRUD(a, location_location, post_data, put_data, undefined, undefined, assert, done);
})
;
