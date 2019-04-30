# new-blog
New personal blog's frontend part.

## What i found while making this

### 1. bind()

When you want to pass `function` with `parameter`, you can use `bind()`.
```javascript
changeState = (value) => {
    this.setState = {
        boolean: value,
    }
}
render() {
    return (
        <Button onClickFunction={this.changeState.bind(null, true)} />
    )
}
```
This is the simple example, you can pass the `parameter`(`true`, in here) to the `Button` component. But first `parameter` must be `null`, `bind()` will pass second parameter to `onClickFunction`.