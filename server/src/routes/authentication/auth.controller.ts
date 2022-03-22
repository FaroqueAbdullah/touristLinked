import { Request, Response } from 'express';
import  * as bcrypt  from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { User }  from '../../models/user.model'

const signUpMethods = async ( req: Request, res: Response ) : Promise<void>  => {
  try {
    const { first_name, last_name, email, birth_day, gender, role, password } = req.body

    if ( !(first_name && last_name && email && birth_day && gender && password ) ) {
      res.status(400).send({ 'message' : "all fields are required" })
    }

    const oldUser = await User.findOne({ email });

    if ( oldUser ) {
      res.status(409).send({ 'message' : "User Already Exist. Please Login" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      birth_day,
      gender,
      role,
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY as string,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;

    res.status(201).send({ 'message' : user });

  } catch (err) {
    res.status(500).send({ 'message' : "Server error" });
  }

}

const logInMethods = async ( req: Request, res: Response ) : Promise<void> => {
  try {
    const { email, password } = req.body;

    if ( !(email && password) ) {
      res.status(400).send({ 'message' : "all fields are required" })
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY as string,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
    }

    res.status(200).json(user);
  } catch ( err ) {
    res.status(500).send({ 'message' : "Server error" });
  }
}

export {
  signUpMethods,
  logInMethods
}