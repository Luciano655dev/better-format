function ParseURL(url){
    try {
        const urlObj = new URL(url)

        return {
            urlObj: urlObj,
            protocol: urlObj.protocol,
            subdomain: urlObj.hostname.split('.').length > 2 ? urlObj.hostname.split('.')[0] : null,
            domain: urlObj.hostname.split('.').slice(-2).join('.'),
            port: urlObj.port,
            path: urlObj.pathname,
            query: urlObj.search,
            parameters: urlObj.searchParams,
            fragment: urlObj.hash,
        }
    } catch (err) {
        return err
    }
}

module.exports = ParseURL