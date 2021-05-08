import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';

function validationMiddleware(type: any, skipMissingProperties = false, value: 'query' | 'body' = 'query'): RequestHandler {
  return (req, res, next) => {
    validate(plainToClass(type, value === 'query' ? req.query : req.body), { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => getErrorMesssage(error)).toString();
          next(new HttpException(400, message));
        } else {
          next();
        }
      });
  };
}

function getErrorMesssage(error: ValidationError) {
  const result = [];
  if (error.children) {
    error.children.forEach((child) => {
      result.push(...getErrorMesssage(child));
    });
  }
  if (error.constraints) result.push(...Object.values(error.constraints));
  return result;
}


export default validationMiddleware;
