import { ApolloClient, InMemoryCache } from '@apollo/client';
import { version } from 'os';
// let client: ApolloClient<any>|null =null
export const getClient = ()=>{
const client = new ApolloClient({
uri:process.env.API_URL,
// uri:'https://prairiegrove.stepzen.net/api/errant-salamander/__graphql',
cache: new InMemoryCache(),
headers: {
Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
// 'client-name': 'prairiegrove',
// 'client-version':'1.0.0',
// 'Content-Type': 'application/json'
// Authorization:'apikey prairiegrove::stepzen.net+1000::0e49d62d1fd825e4d05ab0cded6058e3b7f97f9dff6cc8bc814516f506d18141'
},
})
return client
}

