// components/FileUpload.tsx
import React from "react";

interface FileUploadProps {
  name: string;
  label: string;
  value: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  touched?: any;
  accept?: string;
  required?: boolean;
  helperText?: string;
  maxSizeMB?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  touched,
  accept = ".pdf",
  required = false,
  helperText,
  maxSizeMB = 5,
}) => {
  //   console.log(touched);
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        className={`border-2 border-dashed ${
          error && touched ? "border-red-500" : "border-gray-300"
        } rounded-lg p-6 text-center`}
      >
        <input
          type="file"
          id={name}
          name={name}
          accept={accept}
          onChange={onChange}
          className="hidden"
        />
        <label htmlFor={name} className="cursor-pointer block">
          <div className="text-center">
            <i className="fas fa-file-pdf text-blue-500 text-3xl mb-2"></i>
            <p className="text-sm text-gray-700 mb-1">
              Cliquez pour télécharger votre fichier
            </p>
            {helperText && (
              <p className="text-xs text-gray-500">{helperText}</p>
            )}
          </div>
        </label>

        {value && (
          <div className="mt-3 flex items-center justify-center text-sm text-green-600">
            <i className="fas fa-check-circle mr-2"></i>
            <span>Fichier sélectionné : {value.name}</span>
          </div>
        )}
      </div>

      {error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
