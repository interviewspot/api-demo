var jobboard_joblisting = 'jobboard/joblisting';


QUnit.test("CRUD " + jobboard_joblisting, function (assert) {
    console.log('testing ' + jobboard_joblisting + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_joblisting = {

        "expiry_date": "2016-01-01 10:10:10",
        "title": "1",
        "description": "1",
        "qr_code_url": "https://qrcode.org/code1",

        //"owner": "", //id of user
        "organisation": "1",
        "location": "", //id of location
        "salary_from": "1", //id of salary_from
        "salary_to": "1",
        "type": "1",
        "visibility": "1"
        //todo tags are missing
    };

    a.navigate(['inspot']);
    a.navigate(['job_listing.post']);
    post_data = {listing: data_joblisting};
    //post_data.listing.admin_user = 1;
    put_data = JSON.parse(JSON.stringify(post_data)); //post_data.slice(0);
    put_data.listing.title = 'hello title update';
    API.testCRUD(a, jobboard_joblisting, post_data, put_data, undefined, undefined, assert, done);
})
;
