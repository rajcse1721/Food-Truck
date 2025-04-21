import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClasCompoment from "./ProfileClassComp";

const About = () => {
  return (
    <div>
      <h1>this is about us page </h1>
      <p>you can brief about you and your services </p>

      {/* {<Outlet />} */}
      <Profile name="Rajesh" />
      <ProfileClasCompoment name="Sonu" />
    </div>
  );
};

export default About;
