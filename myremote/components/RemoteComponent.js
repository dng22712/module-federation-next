import dynamic from 'next/dynamic';

const RemoteComponent = dynamic(()=> import("host/footer"), {
  ssr: false,
});

export default RemoteComponent;