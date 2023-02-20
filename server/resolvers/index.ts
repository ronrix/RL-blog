import authMiddleware from "../middleware/auth.middleware";

export default {
  Query: {
    hello: authMiddleware((parents: any, args: any, context: any, info: any) => {
      return 'Hello world!';
    }),
    world: () => {
      return "Work!!"
    }
  },
};