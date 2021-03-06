const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'list',
    category : 'radio',
    timeout: 5000,
    description : 'Renvoie la liste des stations disponibles',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const embed = new MessageEmbed()
            .setColor(3447003)
            .addField(':flag_fr: Liste des stations:', '`1`: AnimeNexus\n`2`: Skyrock\n`3`: Nolife\n')
            .addField(':flag_um: Stations', '`1`: AnimeNexus\n`2`: Skyrock\n`3`: Nolife\n')
            .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)
            .setThumbnail(client.user.avatarURL())

        message.channel.send(embed);
    }
}