# Natas 11: XOR-encrypted cookie

**Vulnerability:** client-side state "protected" by XOR with a static key (known-plaintext attack).

Reading the source shows the app stores its state in a cookie that is XOR-encrypted and then base64-encoded, carrying a small JSON object with a `showpassword` boolean. Setting that flag to `yes` makes the page print the password.

## Approach

1. Recover the XOR key from the known default data (plaintext XOR ciphertext = key).
2. Re-create the cookie with `showpassword` set to true using that key.
3. Intercept the request in Burp and swap in the forged cookie.
