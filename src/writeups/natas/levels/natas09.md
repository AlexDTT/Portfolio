# Natas 9: Command injection

**Vulnerability:** unsanitised input concatenated into a shell `grep` command.

The search feature drops my input straight into a shell `grep` command with no sanitisation, so a shell separator lets me append my own command.

## Payload

```
; cat /etc/natas_webpass/natas10 #
```

- `;` ends grep's command
- `cat` prints the password file
- `#` comments out the trailing part of the original command
