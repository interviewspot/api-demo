var core_user_user = 'core/user/user';

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", core_user_user + ".js");
    var done = assert.async();
    //API.process(API.GET, '', '/benefit', function (result) {
    //    console.log('Method: ' + API.GET);
    //    console.log('Result: ' + result);
    //    done();
    //});

    var a = new HttpAgent(Setting.url + '/sgbenefit', {
        'x-username': Setting.username,
        'x-password': Setting.password
    });
    //a.navigate(['organisations']);
    //a.get(function (response) {
    //    var obj = response.getValue();
    //    console.log('first');
    //    console.log(obj);
    //    console.log(response.isOk());

        //
        //a.navigate([{
        //    'id': 2
        //},'self','medium.logo.update']);
        //
        //a.get(function (response1) {
        //    var obj = response1.getValue();
        //    console.log('hello');
        //    console.log(obj);
        //});
    //
    //});

    var data = {
        "adminUser": "", //id of user
        "parent": "", //id of parent
        "location": "", //id of location
        "logo": "", //id of logo
        "name": "1",
        "code": "12345678",
        "regNo": "1",
        "head_office_no": "1",
        "officeAddress": "1",
        "billingAddress": "1",
        "reservationEmail": "1",
        "userContactNo": "1",
        "client_since": "2015-01-01 10:10:10",
        "officeHours": "1",
        "redemptionPassword": "1",
        "aboutCompany": "1"
    };
    a.navigate(['organisations.post']);
    a.post(function(res){console.log(res);},{organisation: data});


});
