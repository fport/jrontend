# Import Fragment 
```jsx
import dynamic from 'next/dynamic';

const ReactRemoteComponent = dynamic(() => import('remote/Osman'), {
    ssr: false,
});


```
```jsx
return (
    <ReactRemoteComponent />
);

```
