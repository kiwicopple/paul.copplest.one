---
description: Useful CSS / Sass snippets
---
# CSS / Sass

Note: the below is Sass, so you will have to put it through a Scss pre-processor for it to be usable in plain ol' CSS.

```scss
// Uncomment the snippet below if you need to figure out depths/layouts
// Credit: https://dev.to/gajus/my-favorite-css-hack-32g3

// * { background-color: rgba(255,0,0,.2); }
// * * { background-color: rgba(0,255,0,.2); }
// * * * { background-color: rgba(0,0,255,.2); }
// * * * * { background-color: rgba(255,0,255,.2); }
// * * * * * { background-color: rgba(0,255,255,.2); }
// * * * * * * { background-color: rgba(255,255,0,.2); }
// * * * * * * * { background-color: rgba(255,0,0,.2); }
// * * * * * * * * { background-color: rgba(0,255,0,.2); }
// * * * * * * * * * { background-color: rgba(0,0,255,.2); }

 
// SPACING CSS 
// Class examples: 
//    m-none: no margin
//    p-none: no padding
//    m-b-sm: small bottom margin
//    p-r-l: large right padding
// Credit: https://github.com/jgthms/bulma/issues/451#issuecomment-331758839
$sizeUnit: rem;
$marginKey: 'm';
$paddingKey: 'p';
$separator: '-';
$sizes: (
  ('none', 0),
  ('xxs', 0.125),
  ('xs', 0.25),
  ('sm', 0.5),
  ('md', 1),
  ('lg', 2),
  ('xl', 4),
  ('xxl', 8)
);
$positions: (('t', 'top'), ('r', 'right'), ('b', 'bottom'), ('l', 'left'));

@function sizeValue($key, $value) {
  @return if($key == 'none', 0, $value + $sizeUnit);
}

@each $size in $sizes {
  $sizeKey: nth($size, 1);
  $sizeValue: nth($size, 2);
  .#{$marginKey}#{$separator}#{$sizeKey} {
    margin: sizeValue($sizeKey, $sizeValue) !important;
  }
  .#{$paddingKey}#{$separator}#{$sizeKey} {
    padding: sizeValue($sizeKey, $sizeValue) !important;
  }
  @each $position in $positions {
    $posKey: nth($position, 1);
    $posValue: nth($position, 2);
    .#{$marginKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      margin-#{$posValue}: sizeValue($sizeKey, $sizeValue) !important;
    }
    .#{$paddingKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      padding-#{$posValue}: sizeValue($sizeKey, $sizeValue) !important;
    }
  }
}

```