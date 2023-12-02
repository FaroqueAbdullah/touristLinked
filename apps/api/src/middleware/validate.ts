import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { BadRequest } from '../utils/appError';

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(
          new BadRequest(
            error.errors[0].message +
              (error.errors.length > 1
                ? ` and ${error.errors.length} more error`
                : ''),
          ),
        );
      }
    }
  };

export default validate;
