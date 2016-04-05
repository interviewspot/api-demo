var merchant_marketing_promotion = 'merchant/marketing/promotion';


QUnit.test("CRUD " + merchant_marketing_promotion, function (assert) {
    console.log('testing ' + merchant_marketing_promotion + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_promotion = {
        "effective_from": "2015-01-01 10:10:10",
        "expire_on": "2017-01-01 10:10:10",
        "title": "1",
        "type": "1",
        "offer_limit": "",
        "weekly_limit": "",
        "monthly_limit": "1",
        "yearly_limit": "",
        "organisation_limit": "",
        "user_limit": "",
        "estimated_value":"12.5",
        "discount_amount":"",
        "active":"true",
        "tags":{"tag1":{"name":"tag 1"},"tag2":{"name":"tag 2"}}
        //"owner": "", //id of org

    };
    /**
     {"benefit":{"promotion":1,
"organisation":22
}}
     ------------------------------------
     {"benefit":{"promotion":1,
"organisation":22,
"beneficiaries":[1,3,4]
}}
     */
    a.navigate(['sgbeneefit']);
    a.navigate(['promotions.post']);
    post_data = {promotion: data_promotion};
    //post_data.listing.admin_user = 1;
    put_data = JSON.parse(JSON.stringify(post_data)); //post_data.slice(0);
    put_data.promotion.title = 'hello title update';
    API.testCRUD(a, merchant_marketing_promotion, post_data, put_data, undefined, undefined, assert, done);
})
;
