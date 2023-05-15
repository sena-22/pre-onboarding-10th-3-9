const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  enum TextAlign {
    left = 'left',
    center = 'center',
    right = 'right',
    justify = 'justify',
  }

  const titleStyle = {
    fontSize: '6rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: '#ececec',
    textAlign: TextAlign.center as TextAlign | undefined,
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Toodos</h1>
    </header>
  );
};

export default Header;
