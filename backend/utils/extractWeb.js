const axios = require("axios");

const extractWeb = async ({ bio }) => {
    // if (!bio || typeof bio !== 'string') {
    //     console.error("Invalid or missing bio input.");
    //     return ""; // Return an empty response for invalid input
    // }

    try {
        const prompt = `
            Bio: "${bio}". 
            If the bio mentions a workplace or company and includes its website URL, return the URL. 
            If the bio mentions the workplace or company but no URL, find the related official website URL. 
            If the workplace or company is unknown or the URL cannot be determined, return an empty response.
            Dont return anything other than website url.
        `;

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 150,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        // Extract the response content
        const generatedReply = response.data.choices?.[0]?.message?.content?.trim() || "";
        console.log("Generated Reply:", bio , generatedReply);
        return generatedReply;

    } catch (error) {
        console.error("Error fetching data from OpenAI API:", error.response?.data || error.message);
        return ""; // Return an empty string in case of an error
    }
};

module.exports = extractWeb;
