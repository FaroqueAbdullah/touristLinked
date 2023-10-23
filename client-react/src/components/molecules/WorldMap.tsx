import styled from "@emotion/styled";
import WorldMap from "react-svg-worldmap";
import { Card, useTheme } from "@mui/material";


const ProfileMap = () => {
  const data = [
    { country: "cn", value: 1 }, // china
    { country: "in", value: 1 }, // india
    { country: "us", value: 2 }, // united states
    { country: "id", value: 4 }, // indonesia
    { country: "pk", value: 1 }, // pakistan
    { country: "br", value: 1 }, // brazil
    { country: "ng", value: 3 }, // nigeria
    { country: "bd", value: 6 }, // bangladesh
    { country: "ru", value: 9 }, // russia
    { country: "mx", value: 2 }, // mexico
  ];

  const { palette } = useTheme();

  return (

      <WorldMap
        color="green"
        size="xl"
        data={data}
        backgroundColor={palette.background.default}
        borderColor={palette.grey[500]}
      />

      
  );
}

export default ProfileMap;
