import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<any> {
  context.bindings.signalRMessages = [
    {
      target: 'newMessage',
      arguments: [req.body],
    },
  ];
};

export default httpTrigger;
