# Natas 12: File upload via extension swap

**Vulnerability:** server trusts a client-supplied filename/extension for uploads.

The upload form carries a hidden field that hard-codes the saved filename (including its extension). The server trusts that field, so rewriting it from `.jpg` to `.php` makes my file land as PHP, which the server then executes when the file is opened.

## Approach

I intercepted the upload, changed the hidden filename field to a `.php` name, and uploaded this payload:

```php
<?php echo file_get_contents('/etc/natas_webpass/natas13'); ?>
```

Opening the uploaded file ran the PHP and printed the password.
