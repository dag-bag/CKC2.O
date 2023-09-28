const Layout = ({ children }: any) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80')]">
      {children}
    </div>
  );
};

export default Layout;
