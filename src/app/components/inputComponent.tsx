'use client';

import { Field } from 'formik';
import type { FC } from 'react';

interface inputComponentProps {
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  name?: string;
}

const inputComponent: FC<inputComponentProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      ></Field>
    </div>
  );
};
export default inputComponent;
