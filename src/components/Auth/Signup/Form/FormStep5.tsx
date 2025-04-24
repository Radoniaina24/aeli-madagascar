import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/Form/FormInput";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import FormSelect from "@/components/Form/FormSelect";
import FormTextarea from "@/components/Form/FormTextarea";
import FileUpload from "@/components/Form/FileUpload";
export default function FormStep5() {
  const {
    setCurrentStep,
    setFormData,
    prevStep,
    nextStep,
    currentStep,
    formData,
  } = useFormPassContext();
  const initialvalues = {
    cv: formData.cv,
    cin: formData.cin,
    degree: formData.degree,
    birthCertificate: formData.birthCertificate,
    certificateOfResidence: formData.certificateOfResidence,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      cin: Yup.mixed()
        .required("La carte d'identité nationnal est requise")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),
      cv: Yup.mixed()
        .required("Le CV est requis")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),
      degree: Yup.mixed()
        .required("Note ou copies des diplômes obtenus est requis")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),
      certificateOfResidence: Yup.mixed()
        .required("Le certificat de résidence  est requis")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),

      //   birthCertificate: Yup.string().required(
      //     "Bulletin de naissance est requis"
      //   ),
      birthCertificate: Yup.mixed()
        .required("Bulletin de naissance est requis")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),
    }),

    onSubmit: (values) => {
      console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });
  //   console.log(formik.errors);
  const { setFieldValue } = formik;
  //   console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload
            name="cv"
            label="CV "
            value={formik.values.cv}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("cv", file);
            }}
            error={formik.errors.cv}
            touched={formik.touched.cv}
            required
            helperText="Format PDF uniquement, taille max: 5 MB"
          />
          <FileUpload
            name="degree"
            label="Copies des diplômes obtenus"
            value={formik.values.degree}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("degree", file);
            }}
            error={formik.errors.degree}
            touched={formik.touched.degree}
            required
            helperText="Format PDF uniquement, taille max: 5 MB"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload
            name="certificateOfResidence"
            label="Certificat de résidence"
            value={formik.values.certificateOfResidence}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("certificateOfResidence", file);
            }}
            error={formik.errors.certificateOfResidence}
            touched={formik.touched.certificateOfResidence}
            required
            helperText="Format PDF uniquement, taille max: 5 MB"
          />
          <FileUpload
            name="cin"
            label="Pièce d'identité ou passeport"
            value={formik.values.cin}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("cin", file);
            }}
            error={formik.errors.cin}
            touched={formik.touched.cin}
            required
            helperText="Format PDF uniquement, taille max: 5 MB"
          />
        </div>
        <FileUpload
          name="birthCertificate"
          label="Bulletin de naissance"
          value={formik.values.birthCertificate}
          onChange={(e) => {
            const file = e.currentTarget.files?.[0] || null;
            setFieldValue("birthCertificate", file);
          }}
          error={formik.errors.birthCertificate}
          touched={formik.touched.birthCertificate}
          required
          helperText="Format PDF uniquement, taille max: 5 MB"
        />
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">Documents requis</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>CV détaillé et à jour</li>
          <li>Copies des diplômes obtenus</li>
          <li>Certificat de résidence</li>
          <li>Pièce d'identité ou passeport</li>
          <li>Bulletin de naissance </li>
        </ul>
      </div>
      <ButtonNextPrev />
    </form>
  );
}
