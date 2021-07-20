/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});


//hi guys welcome back to another video in this video we well do dm command
//like and sub):
client.on('message', badboy => {
  if(badboy.content.startsWith("dm")){
    var user = badboy.mentions.users.first();
    if(!user) return badboy.channel.send("Mention The User")
    if(user.id === badboy.author.id) return badboy.channel.send("wow")
    var args = badboy.content.split(" ").slice(2).join(" ")
    if(!args) return badboy.channel.send("MSG??")
    user.send(`${args}`).catch(err => {
      return 
    })
    badboy.channel.send("Done")
  }
})
//my channel : https://www.youtube.com/channel/UCLE3ohDKmUQjBYSJeLetDxQ

https://youtu.be/AYC3nUBrohE
// Log our bot in using the token from 
client.login('your token here');





