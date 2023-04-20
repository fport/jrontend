import dynamic from 'next/dynamic';

const ReactRemoteComponent = dynamic(() => import('remote/App'), {
    ssr: false,
});

export default function HomePage() {
    return  <div className="composer-container">
        Welcome to Next.js!
        <ReactRemoteComponent />
    </div>
}
