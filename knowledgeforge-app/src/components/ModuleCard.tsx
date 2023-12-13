import React from "react";
import Modules from "../models/modules";
import { FaCheck } from "react-icons/fa";

type ModuleCardProps = {
  module: Modules;
  completed: boolean;
};

const ModuleCard = (props: ModuleCardProps) => {
  const { module, completed } = props;

  return (
    <div className="flex items-center justify-between border rounded-md p-2 mb-2">
      <h1 className="m-2 px-2 text-xl">{module.title}</h1>
      {completed && <FaCheck color="green" />}
    </div>
  );
};

export default ModuleCard;
