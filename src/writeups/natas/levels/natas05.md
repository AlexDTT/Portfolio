# Natas 5: Cookie value

**Vulnerability:** client-side authorization flag stored in a cookie.

Access is gated by a login cookie (`loggedin=0`). The flag lives entirely client-side, so it can be flipped.

## Approach

I changed the cookie value to `loggedin=1` (editing it in the browser or forwarding a Burp-intercepted request) and reloaded to gain access.

```http
Cookie: loggedin=1
```
