var core_user_user = 'core/user/user';

QUnit.test("CRUD " + core_user_user, function (assert) {
    console.log('testing ' + core_user_user + ".js");

    var done = assert.async();
    var a = new HttpAgent(Setting.url + Setting.app, {
        'x-username': Setting.username,
        'x-password': Setting.password
    });

    var data_user = {
        "email": "admin@" + Math.floor(Date.now() / 1000) + ".com", //unique
        "code": "code_" + Math.floor(Date.now() / 1000),
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "username": "admin",//unique
        "ssn": "1",
        "enabled": "1" //1 or 0
    };
    //"plainPassword": "1",
    a.navigate(['organisations.post']);
    post_data = {organisation: data_organisation};
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
