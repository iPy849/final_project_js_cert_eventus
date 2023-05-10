import jwt_decode from "jwt-decode";

interface IJWTToken {
    id: string,
    iat: number,
    exp: number
}

function SetAuthToken(rawToken: string): Object {
  const token = jwt_decode(rawToken) as IJWTToken;
  const currentEpoch = new Date(Date.now()).getTime() / 1000;
  const needToPersistInSecs = token.exp - currentEpoch;
  const cookie = `${
    import.meta.env.VITE_AUTH_COOKIE_NAME
  }=${rawToken}; Max-Age=${needToPersistInSecs}`;
  console.log(cookie);
  document.cookie = cookie;
  return token;
}

function GetAuthToken(): string | null {
    // TODO: No funciona en IE y Opera mini por el Lookbehind in JS regular expressions: https://caniuse.com/?search=lookbehind
    const splittedCookies = document.cookie
      .split(";")
      .filter((v: string) =>
        v.trim().startsWith(import.meta.env.VITE_AUTH_COOKIE_NAME)
      );
    let bearer = splittedCookies.length !== 0 ? splittedCookies[0] : null;
  
    if (bearer !== null) {
      return bearer.match(/(?<=bearer=)\w+/g)![0];
    }
    return null;
  }

function GetAuthObjectToken(): Object | null {
    const token = GetAuthToken();
    return token ? jwt_decode(token) as IJWTToken : null;
}

export default {
    SetAuthToken,
    GetAuthToken,
    GetAuthObjectToken
}