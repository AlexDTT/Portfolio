# Natas 16: Command-injection oracle under a filter

**Vulnerability:** command substitution inside a quoted `grep` argument, used as a boolean oracle.

My input is placed inside double quotes and passed to `grep` against a dictionary, with several metacharacters filtered. Because the input sits inside `"…"`, the byte/XOR tricks don't apply, but command substitution `$(…)` still works, and it turns the outer `grep` into a yes/no oracle.

## Approach

Run an inner `grep` against the password file and feed its output back into the outer grep's pattern:

```bash
$(grep ^a /etc/natas_webpass/natas17)
```

On its own that is ambiguous. The trick is to append a marker word after the substitution:

```bash
$(grep ^a /etc/natas_webpass/natas17)damaging
```

- Pick a marker word that **is** in the dictionary (I used `damaging`).
- **Wrong guess:** the inner grep finds nothing, so the outer grep searches for just the marker; the marker is in the dictionary and gets printed.
- **Correct prefix:** the inner grep matches, so the outer pattern becomes `<password-text><marker>`, which isn't in the dictionary and prints nothing.

So the marker appearing means the guess is wrong, and the marker absent means that character is confirmed. I walked the password one character at a time and scripted the brute force as in natas15.
