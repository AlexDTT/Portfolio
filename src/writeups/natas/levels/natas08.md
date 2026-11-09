# Natas 8: Reversible encoding

**Vulnerability:** "secret" protected only by reversible encoding, with the encoder visible in the source.

The page compares my input against a hard-coded "encoded secret", and the source shows the `encodeSecret` function it used: base64-encode, reverse the string, then hex-encode (applied in that order).

## Approach

Because every step is reversible, I ran the pipeline backwards on the stored value (hex-decode, reverse, base64-decode) to recover the plaintext secret, then submitted it.

```
encode:  base64  →  reverse  →  hex
decode:  hex⁻¹   →  reverse  →  base64⁻¹
```
