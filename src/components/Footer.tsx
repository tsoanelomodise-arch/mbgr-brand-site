export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold">
            MY BRAND <span className="text-primary">GROUP</span>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} My Brand Group. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            A level 2 B-BBEE contributor entity with 125% procurement recognition
          </p>
        </div>
      </div>
    </footer>
  );
};
