function registerPushwooshAndroid() {

 	var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");

	//set push notifications handler
	document.addEventListener('push-notification',
		function(event)
		{
            var title = event.notification.title;
            var userData = event.notification.userdata;

            //dump custom data to the console if it exists
            if(typeof(userData) != "undefined") {
				console.warn('user data: ' + JSON.stringify(userData));
			}

			//and show alert
			alert(title);

			//stopping geopushes
			//pushNotification.stopGeoPushes();
		}
	);

	//initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
	pushNotification.onDeviceReady({ projectid: "152595972803", appid : "1B267-5CB30" });

	//register for push notifications
	pushNotification.registerDevice(
		function(token)
		{
			alert(token);
			//callback when pushwoosh is ready
			onPushwooshAndroidInitialized(token);
		},
		function(status)
		{
			alert("failed to register: " +  status);
		    console.warn(JSON.stringify(['failed to register ', status]));
		}
	);
}

function onPushwooshAndroidInitialized(pushToken)
{
	//output the token to the console
	console.warn('push token: ' + pushToken);

	var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
	
	//if you need push token at a later time you can always get it from Pushwoosh plugin
	pushNotification.getPushToken(
		function(token)
		{
			console.warn('push token: ' + token);
		}
	);

	//and HWID if you want to communicate with Pushwoosh API
	pushNotification.getPushwooshHWID(
		function(token) {
			console.warn('Pushwoosh HWID: ' + token);
		}
	);
	
	pushNotification.getTags(
		function(tags)
		{
			console.warn('tags for the device: ' + JSON.stringify(tags));
		},
		function(error)
		{
			console.warn('get tags error: ' + JSON.stringify(error));
		}
	);
	 

	//set multi notificaiton mode
	//pushNotification.setMultiNotificationMode();
	//pushNotification.setEnableLED(true);
	
	//set single notification mode
	//pushNotification.setSingleNotificationMode();
	
	//disable sound and vibration
	//pushNotification.setSoundType(1);
	//pushNotification.setVibrateType(1);
	
	pushNotification.setLightScreenOnNotification(false);
	
	//setting list tags
	//pushNotification.setTags({"MyTag":["hello", "world"]});
	
	//settings tags
	pushNotification.setTags({deviceName:"hello", deviceId:10},
		function(status) {
			console.warn('setTags success');
		},
		function(status) {
			console.warn('setTags failed');
		}
	);

	//Pushwoosh Android specific method that cares for the battery
	//pushNotification.startGeoPushes();
}
