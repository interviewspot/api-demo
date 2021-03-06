var organisation_organisation = 'organisation/organisation';
var organisation_handbook_handbook = 'organisation/handbook/handbook';
var organisation_handbook_section = 'organisation/handbook/section';
var organisation_handbook_subsection = 'organisation/handbook/SUBsection';


QUnit.test("CRUD " + organisation_organisation, function (assert) {
    console.log('testing ' + organisation_organisation + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
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


    //{"position":{
    //    "employer": 6,
    //        "employee": 20,
    //        "enabled": true,
    //        "handbook_contact": false,
    //        "employee_classes": {"tag1": {"name": "tag emp_class 1"}, "tag2": {"name": "tag emp_class 2"}}
    //}}


    var data_organisation = {
        "admin_user": "", //id of user
        "parent": "", //id of parent
        "location": "", //id of location
        "logo": "", //id of logo
        "name": "1",
        "code": Math.floor(Date.now() / 1000),
        "reg_no": "1",
        "head_office_no": "1",
        "office_address": "1",
        "billing_address": "1",
        "reservation_email": "1",
        "user_contact_no": "1",
        "client_since": "2015-01-01 10:10:10",
        "office_hours": "1",
        "redemption_password": "1",
        "about_company": "1",
        "slogan": "our slango",
        "facebook_link": "https://www.facebook.com/peterbean",
        "linked_in_link": "",
        "account_name": "binhle" + Math.floor(Date.now() / 1000),
        "qr_code": "https://qrcode.org/code1"
    };

    var data_handbook = {
        "title": "My Title",
        "year": "2015",
        "description": "",
        "version": "1",
        "organisation": "TO-BE-UPDATED" //id of organisation
    };
    var data_section2 = '{"section":{"description":"description content is here","title":"FOREWORD","version":"1","handbook":"4","parent":null,"locale":"en_us","enabled":true}}';
// <p class="fimg"><img src="https://lh3.googleusercontent.com/-ETxNlzHKOtw/VlKPjaNM0bI/AAAAAAAAAkg/lnW5sXf-B4s/s2048-Ic42/11.1.jpg"/><br/></p>
    var data_content = '{"content": {    "title":"Section 11.1 Image",         "image_id":"5",         "html_text":null,         "enabled":"1",         "section":"1",         "parent":null,         "locale":"en_us" }}'
    var data_section1 = {
        "version": "",
        "title": "My Section's title",
        "active": "1", //1 or 0
        "description": "", //
        "parent": "", //id of section is parent of this section
        "handbook": "TO-BE-UPDATED" //id of handbook
    };

    a.navigate(['sgbenefit']);
    a.navigate(['organisations.post']);
    post_data = {organisation: data_organisation};
    post_data.organisation.admin_user = 1;
    put_data = JSON.parse(JSON.stringify(post_data)); //post_data.slice(0);
    put_data.organisation.reg_no = 'hello motor update';
    // OneToOne One Organisation only has one handbook
    // delOrg is a cb function that delete the Org entity after the Handbook has been created
    API.testCRUD(a, organisation_organisation, post_data, put_data, function (res, delOrg) {
        var post_data = {handbook: data_handbook};
        var objOrg = res.getValue();
        post_data.handbook.organisation = objOrg.id;

        var put_data = JSON.parse(JSON.stringify(post_data)); //post_data.slice(0);
        put_data.handbook.title = 'New title updated';
        var b = new HttpAgent(objOrg['_links']['handbook.post']['href'], {
            'x-username': Setting.username,
            'x-password': Setting.password
        });
        // delHb is a cb function that delete the Handbook entity after the Section has been created
        API.testCRUD(b, organisation_handbook_handbook, post_data, put_data, function (res, delHb) {
            var post_data = {section: data_section1};
            var objHb = res.getValue();
            post_data.section.handbook = objHb.id;

            var put_data = JSON.parse(JSON.stringify(post_data));
            put_data.section.title = 'New title updated';
            var c = new HttpAgent(objHb['_links']['sections.post']['href'], {
                'x-username': Setting.username,
                'x-password': Setting.password
            });
            // delSec is a cb function that delete the Section entity after the SUBsection has been created
            API.testCRUD(c, organisation_handbook_section, post_data, put_data, function (res, delSec) {
                var post_data = {section: data_section1};
                var objSec = res.getValue();
                post_data.section.title = 'My Subsection\'s title';
                post_data.section.handbook = objHb.id;
                post_data.section.parent = objSec.id;

                var put_data = JSON.parse(JSON.stringify(post_data));
                put_data.section.title = 'New title updated';

                var d = new HttpAgent(objSec['_links']['sections.post']['href'], {
                    'x-username': Setting.username,
                    'x-password': Setting.password
                });
                // we don't need to add anything else,
                // deleting a section will also delete its subsections.
                API.testCRUD(d, organisation_handbook_subsection, post_data, put_data, undefined, delSec, assert);
            }, delHb, assert);
        }, delOrg, assert);
    }, undefined, assert, done);
})
;
