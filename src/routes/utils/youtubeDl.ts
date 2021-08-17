import { Telegraf, Context } from 'telegraf';
import youtubedl from 'youtube-dl-exec';
import { deleteFile } from '../../helpers/fileHandlers';

const downloadVideo = (ctx: Context): void => {
    youtubedl(ctx.message.text.split(" ")[1], {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: 'https://www.youtube.com'
    }).then(output => {
        deleteFile('seja lá o caminho que eu decidir usar, preciso ver a documentação sobre os padrões ainda');
    }, err => console.log(err));
}
