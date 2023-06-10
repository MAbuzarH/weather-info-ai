// const { Configuration, OpenAIApi } = require('openai');
// const configuration = new Configuration({
//     apiKey:process.env.OPEN_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// export default openai;


// const configuration = new Configuration({
//   apiKey: process.env.OPEN_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
// export default openai;
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-tNDUgk1KrrNs1Nv4ylwK1Km4",
    apiKey: process.env.OPEN_API_KEY,
    // apiKey:`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`
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
export default openai;