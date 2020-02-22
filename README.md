# Styles of overwritting children styles with styled-components

## 1. Using classNames
This approach is simple, you only need to receive a className prop in the parent component. The the children will be styled with single classes.

```

const StyledParent = styled.div`
  .child: color: red;
`
function ParentComponent ({ className }) {
  return (
    <StyledParent className={className}>
      I'm the parent
      <ChildComponent />
    </StyledParent>
  )
}

const StyledChild = styled.div `color: red`

function ChildComponent () {
  return (
    <div className='child'>
      I'm the child
    </div>
  )
}

const StyledParentComponent = styled(ParentComponent)`
  .child {
    color: purple;
  }
`

function Component() {
  return <StyledParentComponent/>
}
```
## 2. Exporting child
In this approach you expose the styled children from the parent one, so you can use them like classNames to overwrite their styles.

```
function ParentComponent ({ className }) {
  return (
    <div className={className}>
      I'm the parent
      <ChildComponent />
    </div>
  )
}

const StyledChild = styled.div `color: red`

function ChildComponent () {
  return (
    <StyledChild>
      I'm the child
    </StyledChild>
  )
}

const StyledParentComponent = styled(ParentComponent)`
  ${StyledChild} {
    color: purple;
  }

`

function Component() {
  return <StyledParentComponent/>
}
```

## 3. External Styled Component
In this approach you create the styled-component outside the main component, passing them via props.

```
function ParentComponent ({ childOverwrite }) {
  return (
    <div>
      I'm the parent
      <ChildComponent childOverwrite={childOverwrite} />
    </div>
  )
}

const StyledChild = styled.div `
  color: red;
  ${childOverwrite}
`

function ChildComponent ({childOverwrite}) {
  return (
    <StyledChild childOverwrite={childOverwrite}>
      I'm the child
    </StyledChild>
  )
}
`

const childOverwrite = styled.css`
  color: purple;
`

function Component() {
  return <ParentComponent childOverwrite={childOverwrite}/>
}
```
