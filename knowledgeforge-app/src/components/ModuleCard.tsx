import React from "react";
import Modules from "../models/modules";

type ModuleCardProps = {
  module: Modules;
};

const ModuleCard = (props: ModuleCardProps) => {
  const { module } = props;

  return (
    <div>
      <div>
        <h1 className="m-2 px-2 text-xl">{module.title}</h1>
      </div>
    </div>
  );
};

export default ModuleCard;
