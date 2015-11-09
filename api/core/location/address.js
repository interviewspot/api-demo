var location_address = 'core/location/address';


QUnit.test("CRUD " + location_address, function (assert) {
    console.log('testing ' + location_address + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_address = {
        "value":"aa",
        //"entity":"aa",
        "room":"2",
        "level":"2",
        "block":"2",
        "number":"22",
        "location":"",
        "street":"",
        "ward":"",
        "district":"",
        "city":"",
        "province":"",
        "country":""
    };

    a.navigate(['inspot']);
    a.navigate(['core_location_addresses.post']);
    post_data = {address: data_address};
    put_data = JSON.parse(JSON.stringify(post_data));
    API.testCRUD(a, location_address, post_data, put_data, undefined, undefined, assert, done);
})
;
