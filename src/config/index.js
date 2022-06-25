import "dotenv/config";

export const mongoDbUserName = process.env.ATLAS_USERNAME;
export const mongoDbPassword = process.env.ATLAS_PASSWORD;
export const port = process.env.PORT || 3000;
