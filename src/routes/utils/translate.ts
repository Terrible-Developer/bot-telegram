import axios from 'axios';

const getTranslation = async (originLanguage: string, targetLanguage: string, text: string): Promise<any> => {
    const request = await axios.post('https://libretranslate.com/translate', {
        body: JSON.stringify({
            q: text,
            source: originLanguage,
            target: targetLanguage,
            format: text
        })
    }, {
        headers: { 'Content-Type': 'application/json' }
    })

    return request;
}


const getAvailableLanguages = async (): Promise<Object[]> => {

    const headers: Object =  { 'Content-Type': 'application/json' };

    const languageList =  await axios.get('https://libretranslate.com/languages', headers)
        .then(data => {
            console.log(data.data);
            return data.data;
        }).catch(err => {
            console.log(err);
            return err;
        });

    return languageList;
}

export {
    getAvailableLanguages,
    getTranslation
}
