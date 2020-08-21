import { useEffect, useState } from "react";
import { isEmpty } from "underscore";

import { getAuth } from "actions/auth";
import { API } from "configs/config";

import UserProfile from "components/compounds/UserProfile";

const UserProfileContainerDashboard = (props) => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    if (!isEmpty(auth.photo)) {
      setImgSrc(`${API}/user/photo/${auth.username}`);
    }
  }, []);

  return <UserProfile photoImgSrc={imgSrc} {...props}></UserProfile>;
};

export default UserProfileContainerDashboard;
