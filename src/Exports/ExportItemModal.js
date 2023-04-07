import ExportItemModalRow from "./ExportItemModalRow";
import { useState } from "react";
import styles from "./ExportItemModal.module.css";

const ExportItemModal = (props) => {
  // SET ARRAY OF EXPORTS TO DISPLAY

  // Create empty array to fill up
  let arrayOfExports = [];

  // Loop trough object
  for (const property in props.exportDetails) {
    // Create empty export object
    let newExport = { title: "", content: "" };

    // Set title from property of object using Regex (adding space before upper letter)
    newExport.title = property;
    newExport.title = newExport.title.replace(/([A-Z])/g, " $1");
    // Change first letter of the title to upper letter
    newExport.title =
      newExport.title.charAt(0).toUpperCase() + newExport.title.slice(1);

    // Check if content of export is object or not
    // If yes loot trough it creating one string from it
    if (typeof props.exportDetails[property] === "object") {
      // Check if object is date to avoid adding empty string and errors
      if (typeof props.exportDetails[property].getMonth === "function") {
        newExport.content =
          props.exportDetails[property].toLocaleDateString("pl-PL");
      }

      if (typeof props.exportDetails[property].getMonth !== "function") {
        for (const exportDetailObject in props.exportDetails[property]) {
          newExport.content =
            newExport.content +
            " " +
            props.exportDetails[property][exportDetailObject];
        }
        // Remove empty space and the begining of the string
        newExport.content = newExport.content.trim();
      }
    }

    // If not just fill up content of the object
    if (typeof props.exportDetails[property] !== "object") {
      newExport.content = props.exportDetails[property];
    }

    // Add new new object to array
    arrayOfExports.push(newExport);
  }

  console.log(arrayOfExports);

  return (
    <div className={styles["export-items-modal"]}>
      <h1>{props.exportDetails.companyName}</h1>

      <ul>
        {arrayOfExports.map((exportToModal, key) => {
          return (
            <ExportItemModalRow
              key={key}
              title={exportToModal.title}
              content={exportToModal.content}
            ></ExportItemModalRow>
          );
        })}
      </ul>
    </div>
  );
};

export default ExportItemModal;
