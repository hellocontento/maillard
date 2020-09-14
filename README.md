# maillard

Toast notifications for React.

## Usage 
First, wrap your application in a `ToastProvider` and place the `Toaster` notification container anywhere inside.

```javascript
import { Toaster, ToastProvider } from 'maillard';

function App() {
  return (
    <>
      <ToastProvider>
        {...}
        <Toaster />
      </ToastProvider>
    </>
  );
}
```

Then, import `useToaster` and call it from your trigger component, as written below.

```javascript
import { useToaster } from 'maillard';

function AnyComponent() {
  const addToast = useToaster();

  return (
    <button onClick={() => addToast('Ping!')}>
  );
}
```

### Toast style
Either `success`, `error`, or `info` (by default). Pass it as second argument to your hook call.

```javascript
return (
  <button onClick={() => addToast('Something went wrong', 'error')} />
);
```

### Toast action
Clicking the toast will dismiss it. However, you can add a side button for a custom callback.

```javascript
  const toastButton = {
    label: 'Undo',
    action: () => ...,
  };

  return (
    <button 
      onClick={() => addToast('Action was taken', 'success', toastButton)}
    />
  );
```

## Options

| Name | Description | Options |
| ---- | ------------| --------|
| `xPos` | Horizontal position | `left` (default), `right` |
| `yPos` | Vertical position | `top`, `bottom` (default) |
| `bgColor` | Toast background | Any |

Example:

```javascript
import { Toaster } from 'maillard';

const toasterOptions = {
  xPos: 'right',
  bgColor: '#303030',
}
function Home() {
  return (
    <Toaster 
      options={toasterOptions}
    />
  );
}
```

