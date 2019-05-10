### GoScript

A jQuery extend for shortcut

```javascript
$.go({
  "?": function () {
    console.log('????');
    $('#debug').html('????');
  },
  "gh": function () {
    console.log('Go Home.');
    $('#debug').html('Go Home.');
  },
  "gd": function() {
    location.href = 'https://dofy.net/';
  }
});
```
