import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../Styles/styles";
import Btn from "./btn";

import useStatsStore from "../Stores/OneUserStore";

const Form = ({ title, statName, status, handleStatus, handleClose }) => {
  const { stats, incrementStat, decrementStat, setStat } = useStatsStore();

  const [undo, setUndo] = useState(0);

  if (status) {
    return (
      <>
        <View style={[styles.formView, styles.formViewOpen]}>
          <Text style={styles.formText}>{title} </Text>
          <Text style={styles.formNum}>{stats[statName]}</Text>
          <View style={styles.changeBtns}>
            <TouchableOpacity
              onPress={() =>
                handleDecrement(
                  statName,
                  stats,
                  decrementStat,
                  setUndo,
                  undo,
                  1
                )
              }
              style={[styles.btn, styles.changeBtn]}
            >
              <Text>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleIncrement(statName, incrementStat, setUndo, undo, 1)
              }
              style={[styles.btn, styles.changeBtn]}
            >
              <Text>+1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.changeBtns}>
            <TouchableOpacity
              onPress={() =>
                handleDecrement(
                  statName,
                  stats,
                  decrementStat,
                  setUndo,
                  undo,
                  5
                )
              }
              style={[styles.btn, styles.changeBtn]}
            >
              <Text>-5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleIncrement(statName, incrementStat, setUndo, undo, 5)
              }
              style={[styles.btn, styles.changeBtn]}
            >
              <Text>+5</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleDone(setUndo, handleClose)}
            style={[styles.btn, styles.formDoneBtn]}
          >
            <Text>DONE</Text>
          </TouchableOpacity>
        </View>

        <Btn
          mod={styles.formCancelBtn}
          text="Cancel"
          fn={() => handleCancel(setStat, statName, setUndo, undo)}
        />
      </>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => handleOpen(handleStatus)}
        style={styles.formView}
      >
        <Text style={styles.formText}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

function handleOpen(handleStatus) {
  handleStatus();
}

function handleDone(setUndo, handleClose) {
  setUndo(0);
  handleClose();
}

function handleCancel(setStat, statName, setUndo, undo) {
  setStat(statName, undo);
  setUndo(0);
  // setNum(tempStats);
}

function handleDecrement(
  statName,
  stats,
  decrementStat,
  setUndo,
  undo,
  amount
) {
  if (statName == "resources") {
    decrementStat(statName, amount);
    setUndo(undo + amount);
  } else if (stats[statName] > 0) {
    decrementStat(statName, amount);
    setUndo(undo + amount);
  }
}

function handleIncrement(statName, incrementStat, setUndo, undo, amount) {
  incrementStat(statName, amount);
  setUndo(undo - amount);
}

export default Form;
