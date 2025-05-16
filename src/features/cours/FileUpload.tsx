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
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  touched,
  accept = ".pdf,.mp4,.avi,.mov,.mkv,.webm", // Par défaut : PDF + formats vidéo populaires
  required = false,
  helperText,
}) => {
  const getFileIcon = (file: File) => {
    const type = file.type;
    if (type.includes("pdf")) return "fa-file-pdf text-red-500";
    if (type.includes("video")) return "fa-file-video text-blue-500";
    return "fa-file text-gray-500";
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          error && touched ? "border-red-500" : "border-gray-300"
        }`}
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
            <i className="fas fa-upload text-blue-500 text-3xl mb-2"></i>
            <p className="text-sm text-gray-700 mb-1">
              Cliquez pour sélectionner un fichier (PDF ou vidéo)
            </p>
            {helperText && (
              <p className="text-xs text-gray-500">{helperText}</p>
            )}
          </div>
        </label>

        {value && (
          <div className="mt-3 flex items-center justify-center text-sm">
            <i className={`fas ${getFileIcon(value)} mr-2 text-lg`}></i>
            <span className="text-green-600">{value.name}</span>
          </div>
        )}
      </div>

      {error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
