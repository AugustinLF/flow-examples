// @flow
type Success = {
  data: string,
  success: boolean
};
type Error = {
  statusCode: number,
  error: Error
};
// try with $Exact<Error>, it'll work!
const httpHandler = (res: Success | Error) => {
  if (res.success) {
    // $FlowFixMe what if you pass an Error which has a success property?
    const data: string = res.data;
  }
};
