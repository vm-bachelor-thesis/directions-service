import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  if (req.body && req.body.response) {
    context.bindings.responseDocument = {
      ...req.body.response,
    };
  } else {
    context.res = {
      status: 400,
    };
  }
};

export default httpTrigger;
