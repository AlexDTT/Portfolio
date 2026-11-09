# Natas 18: Admin session (in progress)

**Goal:** log in as admin to retrieve the credentials.

So far I've been reading the provided code and poking at the session checks in Burp. My current read is that Burp alone probably won't crack this one: the server hands out a session ID and treats one specific ID as the admin, so the real task is finding/forcing that admin session rather than tampering with a single request.

## To do

- [ ] Work out how the admin session is identified and reach it

**Status:** not solved yet.
