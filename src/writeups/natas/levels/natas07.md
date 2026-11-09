# Natas 7: Local file inclusion

**Vulnerability:** user-controlled parameter passed straight to `include` (path traversal).

The page loads its content through a `page` parameter, e.g. `index.php?page=home`, and an HTML comment hinted that the password lives under `/etc/natas_webpass/`. The parameter is passed straight to `include`, so directory traversal reaches any file on disk.

## Payload

After some trial and error with `../`, this read the next password:

```
index.php?page=../../../../etc/natas_webpass/natas8
```
