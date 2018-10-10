// @flow
const func = (res: { data: ?string }) => {
  if (res.data) {
    console.log(res);

    // $FlowFixMe This doesn't error without the console.log
    const str: string = res.data;
  }
};
