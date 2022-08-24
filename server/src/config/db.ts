import mongoose from 'mongoose';

const URL: string = process.env.MONGODB_URI || '';

console.log('UUUUUUUUUUUUUUU', URL)
const connect = (): void => {
    mongoose
        .connect(URL, {})
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};

export  {
    connect,
}