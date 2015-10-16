var
    API = {
        //username: "testuser",
        //password: "p@ssword",
        //url: "http://localhost/projects/apps/api/web/app_dev.php",
        //getInfo: function () {
        //    return this.username + ' ' + this.password;
        //},
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',

        /**
         * @deprecated
         */
        process: function (method, data, route, callback) {
            console.log('preparing to call ajax');
            $.ajax({
                method: method,
                url: Setting.url + route,
                headers: {"x-username": Setting.username, "x-password": Setting.password},
                //data: {promotion: data}
                data: data
            })
                .done(function (result) {
                    callback(result);
                });
        },

        /**
         *
         * @param a
         * @param entity
         * @param post_data
         * @param put_data
         */
        testCRUD: function (a, entity, post_data, put_data, beforeDelete, afterDelete, assert, done) {
            a.post(function (addition) {
                assert.equal(addition.isOk(), true, 'add '+entity);
                if (addition.isOk()) {
                    var obj = addition.getValue();
                    console.log('post a new', entity, 'successfully', obj);
                    //a.navigate(['self']);
                    //data['reg_no'] = 'hello motor';
                    a.put(function (update) {
                        assert.equal(update.xhr.status, 204, 'update '+entity);
                        if (update.xhr.status == 204) {
                            console.log('put ', entity, 'successfully', put_data);
                        }
                        if (beforeDelete !== undefined) {
                            beforeDelete(addition, function () {
                                a.delete(function (del) {
                                    assert.equal(del.xhr.status, 204, 'delete '+entity);
                                    if (del.xhr.status == 204) {
                                        console.log('delete ', entity, 'successfully', put_data);
                                        if (afterDelete !== undefined) {
                                            afterDelete();
                                        }
                                    }
                                    if (done !== undefined) {
                                        done();
                                    }
                                });
                            });
                        } else {
                            a.delete(function (del) {
                                assert.equal(del.xhr.status, 204, 'delete '+entity);
                                if (del.xhr.status == 204) {
                                    console.log('delete ', entity, 'successfully', put_data);
                                    if (afterDelete !== undefined) {
                                        afterDelete();
                                    }
                                }
                                if (done !== undefined) {
                                    done();
                                }
                            });
                        }
                    }, put_data);
                } else {
                    console.log('cannot post to', entity, addition);
                    console.log('debug data', post_data);
                    assert.notEqual(addition.isOk(), true, 'adding failed for entity '+entity);
                }
            }, post_data);

        }
    }

function loadScript(path) {
    $.getScript(path, function () {
        console.log('loaded: ' + path);
    });
}

