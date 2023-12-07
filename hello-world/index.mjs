import log4js from "log4js";

export const handler = async (event, context) => {
    try {
        const response = "Hello World from Muhammad Ahmad!";
        logger.info(`${response}`);
        return response;
    } catch (err) {
        logger.error(`${err}`);
        return err;
    }
};
