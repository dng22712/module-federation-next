import dynamic from 'next/dynamic';

const RemoteComponent = dynamic(()=> import("remote/nav"), {
  ssr: false,
});

export default RemoteComponent;