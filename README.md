# Welcome
This is a simple image slider for your website, feel free to use it any way you want

# Usage
This plugin requires some configuration with your .html (or similar) file.
1. jQuery must be loaded into the file. The required file is located at [node_modules/jquery/dist/jquery.min.js](node_modules/jquery/dist/jquery.min.js), so using `<script src="node_modules/jquery/dist/jquery.min.js"></script>` should work just file, or you could use an external cdn like `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`
3. **slider.css** must be included. `<link rel="stylesheet" href="slider.css">` should work just fine.
4. **slider.js** must be included, and must be included after the required DOM elements (just before `</body>` is fine).
5. You must create the following structure
```
<div>
  <img class="slider-view" src="#">
  <div class="slider-thumbs">
    <img class="slider-item" src="img/FIRST_IMAGE">
    <img class="slider-item" src="img/SECOND_IMAGE">
    <img class="slider-item" src="img/THIRD_IMAGE">
    ...
  </div>
</div>
```
# Options
The following variables can be changed (in *slider.js*) to make the plugin fit your needs.

| Name | Default | Info |
| ---- | ------- | ---- |
| automation_delay | 5000 | How many milliseconds between each image |
| fade_start | 400 | How many millisecond should the the fadeOut take |
| fade_end | 100 | How many millisecond should the the fadeIn take |

# Example
An example usage of the plugin can be found in [the example folder](example), it is a quick and easy way to get started

# License
[MIT](LICENSE)
