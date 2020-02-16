# HTML Cheatsheet

[[toc]]

## Document

```html
<!DOCTYPE html> <!-- Special tag for specifying the document is HTML5  -->
<html></html> <!-- Wraps the entire webpage  -->
<head></head> <!-- For your webpage metadata  -->
<body></body> <!-- Wraps everything that will be visible on the website  -->
```

<details class="collapsable">
<summary>Toggle Example</summary>
<div>

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Meta content here -->
    </head>
    <body>
        <!-- Visible content here -->
    <body>
</html>
```

</div>
</details>


## Structure

```html
<nav></nav> <!-- A wrapper for your navigation  -->
<section></section> <!-- Sections  -->
<div></div> <!-- Tag from grouping elements -->
<span></span> <!-- Tag from wrapping inline elements -->
<footer></footer> <!-- A wrapper for your footer info  -->
```

<details class="collapsable">
<summary>Toggle Example</summary>
<div>

```html
<body>
    <nav></nav>
    <section>
        <div>Some content<div>
        <div>Some other content<div>
    </section>
    <section>
        <div>
            <span>More</span> <span>content</span>
        <div>
    </section>
    <footer>
        <div>Logo</div>
        <div>Links</div>
    </footer>
<body>
```

</div>
</details>

## Content

#### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```


#### Body content

```html
<p>Paragraph text</p>
<strong>Bold Text</strong>
<em>Italic text</em>
<blockquote>A quote/callout</blockquote>
<code>Inline code</code>
<pre>A block of code</pre>
```

#### Special tags

```html
<!-- Links -->
<a href="/your/web/page">Link name</a> <!-- A link to a webpage on your site  -->
<a href="http://example.com">Link name</a> <!-- A link to a webpage on the internet  -->

<!-- Images -->
<img src="/your/image.jpg" alt="Some image description" /> <!-- An image hosted on your website  -->
<img src="https://placekitten.com/300/300" alt="A cute cat" /> <!-- An from another website -->
```

#### Lists 

```html
<li>List item 1</li> <!-- List item  -->

<!-- Unordered list  -->
<ul>
    <!-- Items  -->
</ul> 

<!-- Unordered list  -->
<ol>
    <!-- Items  -->
</ol> 
```


<details class="collapsable">
<summary>Toggle Example</summary>
<div>

```html
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
</ol>
```

</div>
</details>

## Head


```html
<title>Title of your webpage</title>
<meta name=“description“ content=“Description of your site“ />
<meta name=“keywords“ content=“keywords describing your site“ />

<!-- Styling -->
<link rel="stylesheet" type="text/css" href="mystyle.css"> <!-- Link to external CSS  -->
<style>
    /* Your own custom rules */
</style>

 <!-- Javascript  -->
<script src="some/script.js"></script>  <!-- Link to external JS file  -->
<script>
    // Your own Javaxcript
</script>
```


<details class="collapsable">
<summary>Toggle Example</summary>
<div>

```html
<head>
    <title>Title of your webpage</title>
    <meta name=“description“ content=“Description of your site“ />
    <meta name=“keywords“ content=“keywords describing your site“ />

    <!-- Use https://bulma.io to style your website -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>
```

</div>
</details>