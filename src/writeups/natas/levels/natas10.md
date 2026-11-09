# Natas 10: Command injection with a filter

**Vulnerability:** argument injection into `grep` despite a metacharacter blacklist.

Same `grep` sink as natas9, but now the input is filtered for shell metacharacters (`;`, `|`, `&`, backticks, etc.), so the separator trick is blocked.

## Approach

Instead of escaping `grep`, abuse grep's own arguments: supply a pattern that matches anything plus an extra file path, so `grep` reads the password file as a second input and prints its contents.

```
.* /etc/natas_webpass/natas11 #
```
