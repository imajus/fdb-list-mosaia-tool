import toolCall from './tool-call';

export async function handler() {
  try {
    const result = await toolCall();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error: unknown) {
    let message = '';
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = 'Unknown error';
    }
    return {
      statusCode: 500,
      body: JSON.stringify(message),
    };
  }
}
