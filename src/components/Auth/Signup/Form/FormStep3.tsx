import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/Form/FormInput";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import FormSelect from "@/components/Form/FormSelect";
export default function FormStep3() {
  const programs = [
    { label: "Leadership et Management", value: "Leadership et Management" },
    { label: "Entrepreneuriat Innovant", value: "Entrepreneuriat Innovant" },
    { label: "Finance et Investissement", value: "Finance et Investissement" },
    { label: "Marketing Digital", value: "Marketing Digital" },
    { label: "Développement Durable", value: "Développement Durable" },
    { label: "Commerce International", value: "Commerce International" },
  ];
  const studyPeriods = [
    { label: "Septembre 2025", value: "Septembre 2025" },
    { label: "Janvier 2026", value: "Janvier 2026" },
    { label: "Septembre 2026", value: "Septembre 2026" },
  ];
  const fundingOptions = [
    { label: "Financement personnel", value: "Financement personnel" },
    { label: "Bourse d'études", value: "Bourse d'études" },
    {
      label: "Financement par l'employeur",
      value: "Financement par l'employeur",
    },
    { label: "Prêt étudiant", value: "Prêt étudiant" },
    { label: "Autre", value: "Autre" },
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
      studyPeriod: Yup.string().required("La période d'études est requise"),
      funding: Yup.string().required("Le mode de financement est requis"),
    }),

    onSubmit: (values) => {
      // console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });
  //   console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <FormSelect
        id="program"
        label="Programme souhaité"
        value={formik.values.program}
        onChange={formik.handleChange}
        options={programs}
        error={formik.errors.program}
        touched={formik.touched.program}
        placeholder="Sélectionnez un programme"
        required
      />
      <FormSelect
        id="studyPeriod"
        label="Sélectionnez une période"
        value={formik.values.studyPeriod}
        onChange={formik.handleChange}
        options={studyPeriods}
        error={formik.errors.studyPeriod}
        touched={formik.touched.studyPeriod}
        placeholder="Sélectionnez une période"
        required
      />
      <FormSelect
        id="funding"
        label="Sélectionnez un mode de financement"
        value={formik.values.funding}
        onChange={formik.handleChange}
        options={fundingOptions}
        error={formik.errors.funding}
        touched={formik.touched.funding}
        required
      />
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">
          Frais de scolarité indicatifs
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex justify-between">
            <span>Leadership et Management</span>
            <span className="font-semibold">5 500 000 Ar / an</span>
          </li>
          <li className="flex justify-between">
            <span>Entrepreneuriat Innovant</span>
            <span className="font-semibold">5 200 000 Ar / an</span>
          </li>
          <li className="flex justify-between">
            <span>Finance et Investissement</span>
            <span className="font-semibold">5 800 000 Ar / an</span>
          </li>
          <li className="flex justify-between">
            <span>Marketing Digital</span>
            <span className="font-semibold">5 300 000 Ar / an</span>
          </li>
          <li className="flex justify-between">
            <span>Développement Durable</span>
            <span className="font-semibold">5 400 000 Ar / an</span>
          </li>
          <li className="flex justify-between">
            <span>Commerce International</span>
            <span className="font-semibold">5 600 000 Ar / an</span>
          </li>
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
