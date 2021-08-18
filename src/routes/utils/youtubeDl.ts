import { Telegraf, Context } from 'telegraf';
import youtubedl from 'youtube-dl-exec';
import { deleteFile } from '../../helpers/fileHandlers';
import { createReadStream } from 'fs';
import * as path from 'path';

const downloadVideo = async (ctx: any): Promise<void> => {
    await youtubedl(ctx.message.text.split(" ")[1], {
        //dumpSingleJson: true, //opção de debug, não baixa o vídeo, e apenas pega as informações e as retorna em um json
        output: '%(title)s.%(ext)s',
        printJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true
        //writeThumbnail: true //salva a thumbnail em outro arquivo, não sei o quão útil seria, quem sabe
    }).then(async output => {
        const title = output.title;
        let extension = output.ext;
        if(extension === 'webm')
            extension = 'mkv';
        const file = path.join(__dirname, `../../../${title}.${extension}`);
        await ctx.replyWithVideo({ source: createReadStream(file) })
            .then(() => {
                deleteFile(file);
            });
    }, err => {
        console.log(err);
        ctx.reply('Houve um erro. Pode ser que a URL seja inválida, ou que tenha acontecido uma falha. \nPor favor, tente novamente. Se o erro persistir, contate o desenvolvedor.');
    });
}


export {
    downloadVideo
}
