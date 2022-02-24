getSplitName = (personName) => {
    listOfNames = {
      firstName: "",
      middleName: "",
      lastName: "",
    };
  
    if (typeof personName === "string") {
        nameVal = personName.split(" ");
  
      for (let i = 0; i < nameVal.length; i++) {
        if (nameVal.length > 3) {
          return "Error : This function is only for 3 characters name";
        } else {
          if (nameVal.length === 1) {
            listOfNames["firstName"] = nameVal[0];
            listOfNames["middleName"] = "Null";
            listOfNames["lastName"] = "Null";
            break;
          } else if (nameVal.length === 2) {
            listOfNames["firstName"] = nameVal[0];
            listOfNames["middleName"] = "Null";
            listOfNames["lastName"] = nameVal[1];
          } else {
            listOfNames["firstName"] = nameVal[0];
            listOfNames["middleName"] = nameVal[1];
            listOfNames["lastName"] = nameVal[2];
          }
        }
      }
  
      return listOfNames;
    } else if (typeof personName === "object" || typeof personName === "number") {
      return "Error: Invalid data type";
    } else {
      return "Error: No parameter included";
    }
  };
  
  console.log(getSplitName("hengky"));
  console.log(getSplitName("hengky hengky1"));
  console.log(getSplitName("hengky hengky1 hengky2"));
  console.log(getSplitName("hengky hengky1 hengky2 hengky3"));
  console.log(getSplitName(0));