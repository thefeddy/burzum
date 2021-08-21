import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class DiscordService {

    // private Discord = require('discord.js');
    // private client = new this.Discord.Client();
    // private messageEmbed = new this.Discord.MessageEmbed();
    // private message = new this.Discord.Message();

    // // Envs     
    // private prefix = process.env.DISCORD_PREFIX;

    // constructor(private httpService: HttpService) { }

    // public start() {
    //     this.ready();
    //     this.client.on('message', msg => {
    //         console.log(msg.author)
    //         // General Commands

    //         if (msg.content.startsWith(this.prefix + `help`)) {

    //         }
    //     });

    //     this.login();
    // }

    // private login(): void {
    //     this.client.login(process.env.DISCORD_TOKEN);
    // }

    // private ready(): void {
    //     this.client.on('ready', () => {
    //         console.log(`Logged in as ${this.client.user.tag}!`);
    //     });
    // }

}
