# Natas 13: Magic-byte bypass

**Vulnerability:** file-type check that only inspects the first few bytes (`exif_imagetype()`).

The extension swap from natas12 is now blocked by an `exif_imagetype()` check, but that function only inspects the first few bytes of the file. So I kept the `.php` extension (again rewriting the hidden filename field to `.php`) and prepended JPEG magic bytes (`FF D8 FF E0`) with `hexedit` so the file passes as an image.

## Gotcha

Editing the leading bytes corrupted the file enough that the PHP no longer executed. The workaround that worked was to leave some blank lines after the fake header and then paste the same PHP payload a few times, so at least one copy survived intact and ran.

```php
<?php echo file_get_contents('/etc/natas_webpass/natas14'); ?>
```
