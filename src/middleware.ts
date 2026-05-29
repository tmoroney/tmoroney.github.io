export async function onRequest(context: any, next: any) {
  const response = await next();
  response.headers.set('X-Robots-Tag', 'llms-txt');
  return response;
}
