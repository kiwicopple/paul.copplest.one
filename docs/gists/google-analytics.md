---
description: Useful adjustments to Google Analytics
---
# Useful adjustments to GA

Some useful adjustments for the default Google Analytics code snippet.

```js
ga('create', 'UA-XXXX-Y', {
    'siteSpeedSampleRate': 100, // Track site speed for all visitors (usually only 1%)
    'userId': 'as8eknlll', // the ID of the user in your own application
})
```

OR 

```js
gtag('config', 'UA-XXXXXXX-Y', {'site_speed_sample_rate': 100});
```

## Resources

- [API](
https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference)