# Natas 6: Include-file disclosure

**Vulnerability:** sensitive include file served directly by the web server.

The form checks my input against a secret that the code pulls in from `includes/secret.inc`. That include file is served directly, so requesting it in the browser exposes the secret.

Submitting that value in the form returned the password.
