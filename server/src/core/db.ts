import mongoose from "mongoose";
import 'dotenv/config';

const URI: string = process.env.MONGODB_URI ? process.env.MONGODB_URI : '';

const options = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
};
const connectWithDb  = async (cb:any, em:any) => {
  const connectionResult = await mongoose.connect( URI, options);
  // eslint-disable-next-line no-console
  console.log(
    `Connected to mongoDB on database:
    ${connectionResult.connections[0].name} at ${new Date().toDateString()}`
  );
  if (cb && em) cb(em);
};

export default connectWithDb;
