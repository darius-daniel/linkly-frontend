export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1 className="text-gradient" style={{ fontSize: '60px' }}>
        Oops!
      </h1>
      <p>Sorry, an unexpected error has occurred: Page not found</p>
      <a
        href="/"
        style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}
        className="text-primary-blue"
      >
        Home
      </a>
    </div>
  );
}
