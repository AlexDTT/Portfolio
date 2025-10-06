const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-primary font-semibold">Alexandre Teixeira</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
