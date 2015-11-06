var organisation_business = 'organisation/business';

QUnit.test("CRUD " + organisation_business, function (assert) {
    console.log('testing ' + organisation_business + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_business = {
        "merchant_code": "ANHYEUEM",
        "owner": undefined,
        "tags": {"tag1": {"name": "tag 1"}, "tag2": {"name": "tag 2"}}
    };

    a.navigate(['sgbenefit']);
    a.navigate(['organisations']);
    a.get(function (response) {

        var obj = response.getValue()['_embedded']['items'][0];
        //console.log(obj['_links']['self']['href'])
        var url = obj['_links']['self']['href'];
        var b = new HttpAgent(url, {
            'x-username': Setting.username,
            'x-password': Setting.password
        });

        b.navigate(['businesses.post']);
        post_data = {business: data_business};
        post_data.business.owner = obj.id;

        put_data = JSON.parse(JSON.stringify(post_data)); //post_data.slice(0);
        put_data.business.merchant_code = 'ANH_KHONG_CON_YEU_EM_NUA';
        // OneToOne One Organisation only has one handbook
        // delOrg is a cb function that delete the Org entity after the Handbook has been created
        API.testCRUD(b, organisation_business, post_data, put_data, undefined, undefined, assert, done);
    });
})
;