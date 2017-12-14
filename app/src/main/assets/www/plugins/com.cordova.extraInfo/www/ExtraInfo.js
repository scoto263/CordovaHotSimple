cordova.define("com.cordova.extraInfo.ExtraInfo", function(require, exports, module) {
	var exec = require('cordova/exec');
        var errors = function(message) {};
        var extrainfo = {

            	//有回调
            	callMethod :function(action,json,success) {
            		var args = [];
            		args[0] = json
            		exec(success, errors, "ExtraInfo", action, args);
            	},
                //无参，有回调
                       callMethodNoParams : function(action,success) {
                        	exec(success, errors, "ExtraInfo", action, []);
                        },
                	//无回调
                	callMethodNoBack : function(action,json) {
                		var args = [];
                		args[0] = json
                		exec(errors, errors, "ExtraInfo", action, args);
                	},
                	//无参，无回调
                    callMethodNoBackNoParams : function(action) {
                    		exec(errors, errors, "ExtraInfo", action, []);
                    }
        }

    module.exports=extrainfo;

});

