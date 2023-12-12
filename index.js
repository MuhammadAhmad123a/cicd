import log4js from "log4js";

export const handler = async (event, context) => {
    try {
        const response = "Hello World from Muhammad Ahmad GCU!";
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
};
