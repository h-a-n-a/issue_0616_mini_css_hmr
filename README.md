# issue_0616_mini_css_hmr

## Description

Hot module reloading for CSS is not working in the mini-css-extract-plugin.

## How to reproduce

```bash
$ pnpm install
$ pnpm run dev
```

Modify `src/index.css`.

## Actual

Style in `src/async.css` is covered by `src/index.css`.

After reproduction, If you modify `src/async.css`, the order of styles is back to normal. At this time, you can modify `src/index.css`, and you can see the problem is gone.

## Expected

Since `async.js` is imported below `index.css`, the style of `async.js`(i.e `async.css`) should be placed after `index.css`.
