import React from "react";
import Instructor from "../models/Instructor";

type InstructorDetailCardProps = {
  instructor: Instructor;
};

const InstructorDetailCard: React.FC<InstructorDetailCardProps> = ({ instructor }) => {
  return (
    <div className="min-h-screen flex items-center justify-end px-4 bg-background_cream pr-32">
    <div className="p-40 max-w-8xl  bg-white w-3/4 rounded-lg shadow-xl">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-semibold leading-7 text-gray-900">Instructor Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Following are your details</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${instructor.name}`}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${instructor.email}`}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">University</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${instructor.university}`}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Contact Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${instructor.contactNumber}`}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
  );
};

export default InstructorDetailCard;
