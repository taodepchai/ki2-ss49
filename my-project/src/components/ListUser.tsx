import React from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

const ListUser: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetail = (user: any) => {
    navigate(`/user-detail/${user.id}`, { state: { user } });
  };

  return (
    <div className="list-user">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button onClick={() => handleViewDetail(user)}>Xem chi tiết</button>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
