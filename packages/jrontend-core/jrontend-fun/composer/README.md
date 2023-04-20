# Import Fragment 
```jsx
import dynamic from 'next/dynamic';

const ReactRemoteComponent = dynamic(() => import('remote/App'), {
    ssr: false,
});


```
```jsx
return (
    <ReactRemoteComponent />
);

```
