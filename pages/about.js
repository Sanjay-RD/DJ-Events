import Link from "next/link";
const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>This is an app to find latest DJ and other musical events</p>
      <p>Version 1.0.0</p>
      <Link href="/">Back</Link>
    </div>
  );
};

export default AboutPage;
