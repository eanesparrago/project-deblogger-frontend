import { useEffect, useState } from "react";
import { isEmpty } from "underscore";

import { getAuth } from "actions/auth";
import { API } from "configs/config";

import UserAvatar from "components/UserAvatar";

const UserAvatarContainer = (props) => {
  const auth = getAuth();
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    if (!isEmpty(auth.photo)) {
      setImgSrc(`${API}/user/photo/${auth.username}`);
    }
  }, []);

  return (
    <UserAvatar
      imgSrc={imgSrc}
      alt={`Profile photo of ${auth.username}`}
      {...props}
    ></UserAvatar>
  );
};

export default UserAvatarContainer;
