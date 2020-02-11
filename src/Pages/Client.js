import {createClient} from 'contentful'
//Used this contentful from my id: sangammahesh007@yahoo.com 

const Client = createClient({
    space: 'k8w2qgznsdso',
    accessToken: 'TJAE-NYRT1uVLmF4RaWKRyRSyKE9EThyj_EMfR29v9Q'
})

// space: process.env.REACT_APP_API_SPACE,
// accessToken: process.env.REACT_APP_ACCESS_TOKEN

export default Client