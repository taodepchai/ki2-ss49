import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (location.state && location.state.user) {
      setUser(location.state.user);
    }
  }, [location.state]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-detail">
      <h1>User Detail</h1>
      <p>Id: {user.id}</p>
      <p>UserName: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserDetail;
