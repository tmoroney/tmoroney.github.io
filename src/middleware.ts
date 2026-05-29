export function onRequest(context: any) {
  const response = context.next();
  response.headers.set('X-Robots-Tag', 'llms-txt');
  return response;
}
