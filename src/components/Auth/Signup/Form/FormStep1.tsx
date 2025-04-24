import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/Form/FormInput";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ButtonNextPrev from "../ButtonPrevNext/Button";
export default function FormStep1() {
  const {
    setCurrentStep,
    setFormData,
    prevStep,
    nextStep,
    currentStep,
    formData,
  } = useFormPassContext();
  const initialvalues = {
    lastName: formData.lastName as string,
    firstName: formData.firstName as string,
    emailAddress: formData.emailAddress as string,
    confirmEmailAddress: formData.confirmEmailAddress as string,
    phoneNumber: formData.phoneNumber as string,
    dateOfBirth: formData.dateOfBirth as string,
    nationality: formData.nationality as string,
    address: formData.address as string,
    city: formData.city as string,
    postalCode: formData.postalCode as string,
    country: formData.country as string,
  };
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      lastName: Yup.string().required("Le nom est requis"),
      firstName: Yup.string().required("Le prénom est requis"),
      emailAddress: Yup.string()
        .email("Invalid email")
        .required("L'email est requis"),
      confirmEmailAddress: Yup.string()
        .email("Invalid email")
        .required("L'email est requis"),
      phoneNumber: Yup.string().required("Le téléphone est requis"),
      dateOfBirth: Yup.string().required("La date de naissance est requise"),
      nationality: Yup.string().required("La nationalité est requise"),

      address: Yup.string().required("L'adresse est requis"),
      city: Yup.string().required("La ville est requise"),
      postalCode: Yup.string().required("Le code postal est requis"),
      country: Yup.string().required("Le pays est requis"),
    }),

    onSubmit: (values) => {
      // console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="lastName"
            label="Nom"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
            placeholder="Votre nom de famille"
            required
          />
          <FormInput
            id="firstName"
            label="Prénom"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
            placeholder="Votre prénom"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="emailAddress"
          label="Email"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          error={formik.errors.emailAddress}
          touched={formik.touched.emailAddress}
          placeholder="votre.email@exemple.com"
          required
        />
        <FormInput
          id="confirmEmailAddress"
          label="Confirmation Email"
          value={formik.values.confirmEmailAddress}
          onChange={formik.handleChange}
          error={formik.errors.confirmEmailAddress}
          touched={formik.touched.confirmEmailAddress}
          placeholder="Confirmer votre email"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="phoneNumber"
          label="Téléphone"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.errors.phoneNumber}
          touched={formik.touched.phoneNumber}
          placeholder="+261 XX XX XXX XX"
          required
        />
        <FormInput
          type="date"
          id="dateOfBirth"
          label="Date de naissance"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          error={formik.errors.dateOfBirth}
          touched={formik.touched.dateOfBirth}
          required
        />
      </div>

      <FormInput
        type="text"
        id="nationality"
        label="Nationalité"
        value={formik.values.nationality}
        onChange={formik.handleChange}
        error={formik.errors.nationality}
        touched={formik.touched.nationality}
        placeholder="Votre nationalité"
        required
      />
      <FormInput
        type="text"
        id="address"
        label="Votre adresse"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.errors.address}
        touched={formik.touched.address}
        placeholder="Votre nationalité"
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormInput
          type="text"
          id="city"
          label="Ville"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
          touched={formik.touched.city}
          placeholder="Votre ville"
          required
        />
        <FormInput
          type="text"
          id="postalCode"
          label="Code postal"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.errors.postalCode}
          touched={formik.touched.postalCode}
          placeholder="Code postal"
          required
        />
        <FormInput
          type="text"
          id="country"
          label="Pays"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.errors.country}
          touched={formik.touched.country}
          placeholder="Votre pays"
          required
        />
      </div>
      <ButtonNextPrev />
    </form>
  );
}
