import AutoLaunch from 'auto-launch';

const appLauncher = new AutoLaunch({
  name: 'My NW.js or Electron app'
});


export function autostart(setting, callback) {
  appLauncher.isEnabled().then(function(enabled){
    if(enabled) {
      appLauncher.disable();
    } else {
      return appLauncher.enable();
    }
  }).then(function(err){
    if (err) callback(err);
  });
}
