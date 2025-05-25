function extractData(str) {
    const r1_url = "https://18comic.vip/album/";
    const r2_url = "https://nhentai.net/g/";
    const tid_url = "twitter://user?screen_name=";
    const pid_url = "https://www.pixiv.net/artworks/";

    // Prioritize URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlMatch = str.match(urlRegex);
    if (urlMatch) {
        return urlMatch[0];
    }

    // 'jm' with 6 or 5 numbers
    const rule1Regex = /jm\d{5,6}(?!\d)/i;
    const rule1Match = str.match(rule1Regex);
    if (rule1Match) {
        return (r1_url + rule1Match[0].substring(2));
    }

    // 6 or 5 numbers
    const rule2Regex = /(?<!\d)\d{6}(?!\d)/;
    const rule2Match = str.match(rule2Regex);
    if (rule2Match) {
        return (r2_url + rule2Match[0]);
    }

    // twitter user id
    const tidRegex = /@[^\s）)]+/;
    const tidMatch = str.match(tidRegex);
    if (tidMatch) {
        scheme = "1"
        return (tid_url + tidMatch[0].substring(1));
    }

    // pixiv id
    const pidRegex = /\d{9}/;
    const pidMatch = str.match(pidRegex);
    if (pidMatch) {
        return (pid_url + pidMatch[0]);
    }

    return 'https://e-hentai.org/?f_search='+str;
}
output = extractData(input)
    






    
