cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebase-authentication.FirebaseAuthentication",
      "file": "plugins/cordova-plugin-firebase-authentication/www/FirebaseAuthentication.js",
      "pluginId": "cordova-plugin-firebase-authentication",
      "merges": [
        "cordova.plugins.firebase.auth"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-stripe.stripe",
      "file": "plugins/cordova-plugin-stripe/www/CordovaStripe.js",
      "pluginId": "cordova-plugin-stripe",
      "clobbers": [
        "cordova.plugins.stripe"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-support-android-plugin": "1.0.1",
    "cordova-support-google-services": "1.3.2",
    "cordova-plugin-firebase-authentication": "3.0.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-webview": "4.1.3",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-plugin-stripe": "1.5.3"
  };
});