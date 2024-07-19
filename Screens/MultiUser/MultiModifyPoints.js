import React from "react";
import { styles } from "../../Styles/styles";
import MultiForm from "../../components/Multiform";
import { LinearGradient } from "expo-linear-gradient";
import { colours } from "../../Styles/styles";
import { useState } from "react";

const MultiModifyPoints = () => {
  const [open, setOpen] = useState(-1);
  function handleOpen(index) {
    setOpen(index);
  }
  function handleClose() {
    setOpen(-1);
  }
  return (
    <LinearGradient
      colors={[colours.primary1, colours.primary2]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
      locations={[0, 0.8]}
    >
      <MultiForm
        title={"CARBON"}
        statName={"carbon"}
        status={open === 0}
        handleStatus={() => handleOpen(0)}
        handleClose={() => handleClose()}
      />
      <MultiForm
        title={"RESOURCES"}
        statName={"resources"}
        status={open === 1}
        handleStatus={() => handleOpen(1)}
        handleClose={() => handleClose()}
      />
    </LinearGradient>
  );
};

export default MultiModifyPoints;
