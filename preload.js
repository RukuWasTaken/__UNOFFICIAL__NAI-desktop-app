// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const DiscordRPC = require('discord-rpc')
    // const sps = ['rpc', 'rpc.api', 'messages.read', 'rpc.activities.write', 'rpc.notifications.read'];
    const rpc = new DiscordRPC.Client({ transport: 'ipc' });
    DiscordRPC.register('990397227543461979');
    rpc.on('ready', () => {
      let datee = new Date();
      function check_presense(){
        let mnamee = document.querySelector("#app > div.sc-19a0a9a2-0.dVhexQ > div > div.sc-60fc84aa-0.jVjqQX.infobar > div.sc-97dae6ea-0.kLfexO > div.sc-97dae6ea-3.fYYZiI > div.sc-97dae6ea-4.dMIzRk > div > div > div:nth-child(1) > div:nth-child(3) > div > div > div.css-9elwun > div > div > div:nth-child(2) > strong");
        if(mnamee != null && mnamee.textContent != null){
          console.log(mnamee.textContent || '\nmname IS null\n');
          let mname = mnamee.textContent;
          let lik;
          if(mname == "Euterpe"){
            lik = 'euterpe_normal';
          }else if(mname == "Krake"){
            lik = 'krake_normal';
          }else if(mname == "Calliope"){
            lik = 'calliope_normal';
          }else if(mname == "Snek (Experimental)"){
            lik = 'snek_normal';
            mname = "Snek";
          }else if(mname == "Genji (Experimental)"){
            lik = 'genji_normal';
            mname = "Genji";
          }else if(mname == "Sigurd"){
            lik = 'sigurd_normal';
          }
          let hybname = document.querySelector(".comment-name::after")
          if(hybname != null){
            hybname = 'Using '+hybname.textContent+' as Hypebot!'
          } else{
            hybname = 'Hypebot is thinking..'
          }
          let m = false;
          if(datee.getMilliseconds() == 6969){
            console.log(m);
            m = true;
            console.log(m);
          }
          if(m === false){
            rpc.setActivity({
              details: 'Writing with '+mname+'!',
              state: hybname,
              largeImageKey: lik,
              largeImageText: 'This is '+mname+'.',
              smallImageKey: undefined,
              smallImageText: undefined,
              instance: false,
            });
          }else{
            rpc.setActivity({
              details: 'Writing with '+mname+'!',
              state: hybname,
              largeImageKey: lik,
              largeImageText: 'This is '+mname+'.',
              smallImageKey: 'goose_right',
              smallImageText: 'A wild goose has appeared!',
              instance: false,
            });
            m = false;
          }
          setTimeout(check_presense, 16000);
          return;
        }
        console.log('____________________________\nName Element not found.\n____________________________')
        setTimeout(check_presense, 1500);
        return;
      };
      check_presense();
    })
    rpc.login({ clientId:'990397227543461979' }).catch(console.error);
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
