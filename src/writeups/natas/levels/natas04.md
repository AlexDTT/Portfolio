# Natas 4: Referer header

**Vulnerability:** access control based on the `Referer` request header.

The page only grants access to visitors who arrive from the natas5 page, which it checks via the `Referer` request header, a value fully under the client's control.

## Approach

I used Burp Suite as an intercepting proxy, caught the request, and rewrote the header to the natas5 URL:

```http
Referer: http://natas5.natas.labs.overthewire.org/
```

Forwarding the edited request returned the password.
