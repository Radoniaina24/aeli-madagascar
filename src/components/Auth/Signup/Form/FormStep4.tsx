import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/Form/FormInput";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import FormSelect from "@/components/Form/FormSelect";
import FormTextarea from "@/components/Form/FormTextarea";
export default function FormStep4() {
  const {
    setCurrentStep,
    setFormData,
    prevStep,
    nextStep,
    currentStep,
    formData,
  } = useFormPassContext();
  const initialvalues = {
    coverLetter: formData.coverLetter as string,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      coverLetter: Yup.string()
        .min(
          300,
          "La lettre de motivation doit contenir au moins 300 caractères"
        )
        .required("La lettre de motivation est requise"),
    }),

    onSubmit: (values) => {
      //   console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });
  //   console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="space-y-6">
        <FormTextarea
          id="coverLetter"
          label="Lettre de motivation"
          value={formik.values.coverLetter}
          onChange={formik.handleChange}
          error={formik.errors.coverLetter}
          touched={formik.touched.coverLetter}
          placeholder="Expliquez vos motivations pour rejoindre notre établissement et le programme choisi..."
          required
          minCharCount={300}
          hint="Expliquez pourquoi vous souhaitez rejoindre l'AELI Madagascar et ce programme en particulier."
          rows={10}
        />
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-bold text-yellow-800 mb-2">
            Conseils pour votre lettre de motivation
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Présentez votre parcours académique et professionnel</li>
            <li>Expliquez pourquoi vous avez choisi ce programme spécifique</li>
            <li>
              Détaillez vos objectifs professionnels à court et long terme
            </li>
            <li>Mettez en avant vos qualités et compétences pertinentes</li>
            <li>
              Expliquez comment ce programme s'inscrit dans votre projet
              professionnel
            </li>
            <li>Mentionnez ce qui vous distingue des autres candidats</li>
          </ul>
        </div>
      </div>

      <ButtonNextPrev />
    </form>
  );
}
