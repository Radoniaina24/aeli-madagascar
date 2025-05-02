import React, { useEffect } from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/Form/FormInput";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import FormSelect from "@/components/Form/FormSelect";
export default function FormStep3() {
  const programs = [
    { label: "Licence", value: "Licence" },
    { label: "Master", value: "Master" },
  ];
  const studyPeriodOptions: any = {
    Licence: [
      { label: "Licence 1", value: "Licence 1" },
      { label: "Licence 2", value: "Licence 2" },
    ],
    Master: [
      { label: "Master 1", value: "Master 1" },
      { label: "Master 2", value: "Master 2" },
    ],
  };

  const course = [
    {
      label: "BEL : Business, Entrepreneuriat et Leadership",
      value: "BEL : Business, Entrepreneuriat et Leadership",
    },

    {
      label: "BEN : BTP et Energie Renouvelable",
      value: "BEN : BTP et Energie Renouvelable",
    },
  ];
  const tuitionFees = [
    {
      program: "Droit d'inscription",
      fee: "300 000 MGA ",
    },
    { program: "Frais de formation annuelle", fee: "2 500 000 MGA" },
  ];
  const {
    setCurrentStep,
    setFormData,
    prevStep,
    nextStep,
    currentStep,
    formData,
  } = useFormPassContext();
  const initialvalues = {
    program: formData.program as string,
    studyPeriod: formData.studyPeriod as string,
    funding: formData.funding as string,
  };
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      program: Yup.string().required("Le choix du programme est requis"),
      studyPeriod: Yup.string().required("Le choix du niveau est requis"),
      funding: Yup.string().required("Le choix du  mention  est requis"),
    }),

    onSubmit: (values) => {
      // console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });
  // Réinitialiser le champ studyPeriod quand le programme change
  useEffect(() => {
    const validOptions = studyPeriodOptions[formik.values.program] || [];
    const isCurrentValid = validOptions.some(
      (opt: any) => opt.value === formik.values.studyPeriod
    );
    if (!isCurrentValid) {
      formik.setFieldValue("studyPeriod", "");
    }
  }, [formik.values.program]);
  //   console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <FormSelect
        id="program"
        label="Obtenir un diplôme de :"
        value={formik.values.program}
        onChange={formik.handleChange}
        options={programs}
        error={formik.errors.program}
        touched={formik.touched.program}
        placeholder="Sélectionnez un diplôme"
        required
      />
      <FormSelect
        id="studyPeriod"
        label="Choix du niveau"
        value={formik.values.studyPeriod}
        onChange={formik.handleChange}
        options={studyPeriodOptions[formik.values.program] || []}
        error={formik.errors.studyPeriod}
        touched={formik.touched.studyPeriod}
        placeholder="Sélectionnez un niveau"
        required
      />
      <FormSelect
        id="funding"
        label="Mention"
        value={formik.values.funding}
        onChange={formik.handleChange}
        options={course}
        error={formik.errors.funding}
        touched={formik.touched.funding}
        placeholder="Sélectionnez une mention"
        required
      />
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">
          Frais de scolarité indicatifs
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {tuitionFees.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.program}</span>
              <span className="font-semibold">{item.fee}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-gray-500">
          * Ces montants sont donnés à titre indicatif et peuvent être sujets à
          modification.
        </p>
      </div>
      <ButtonNextPrev />
    </form>
  );
}
