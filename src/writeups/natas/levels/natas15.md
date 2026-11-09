# Natas 15: Boolean blind SQL injection

**Vulnerability:** SQL injection where the only output is a true/false signal.

This level only reveals whether a user exists, never the password, so it has to be extracted one character at a time. First I confirmed `natas16` exists, then used injected `SUBSTRING()` conditions as a true/false oracle, reading the "user exists" response as the yes/no signal.

## Payload

```sql
natas16" AND SUBSTRING(password,1,1) > 'm' -- -
```

Using `<` / `>` comparisons (binary search per character) rather than testing every letter made each character far quicker to pin down. I scripted the requests in Python to automate the whole extraction.

> **Note to self:** substring extraction really is required here; the only real choice is how you guess each character, and range comparisons beat a linear scan.
